import React, { useEffect, useState, useRef } from "react";
//local components
import { CommonCard } from "components/card";
//layout
import { AdminLayout } from "layouts";
//icons
import {
  Edit,
  ArrowsMove,
  Attachment,
  Cancel,
  RectangleLandscape,
  Switch,
  CheckSquareFill,
  Pencil,
  Square,
  RightArrowAlt,
  Delete,
} from "components/styled-icons";
import Tree from "lib/utils/tree";
import Node from "lib/utils/node";
import FormBuilderService from "lib/services/form-builder.service";
import Loader from "components/elements/Loader";

const treeInstance = new Tree(new Node({ label: "root" }));
const formBuilderService = new FormBuilderService();
const FormBuilder = () => {
  const [selectedTool, setSelectedTool] = useState("");
  const [renderItems, setRenderItems] = useState([]);
  const [depth, setDepth] = useState(0);
  const formBuilderRef = useRef({ formId: null, operation: null, id: null, parentId: null });
  const [loading, setLoadingStatus] = useState(false);

  const options = [
    {
      name: "Edit",
      icon: Edit,
      color: "#000",
    },
    {
      name: "Move",
      icon: ArrowsMove,
      color: "#0073FF",
    },
    {
      name: "Copy to clipboard",
      icon: Attachment,
      color: "#000",
    },
    {
      name: "Archive",
      icon: Cancel,
      color: "#FC5A5A",
    },
  ];

  const tools = [
    {
      label: "Short text field",

      icon: <div className="py-2 px-5 border border-light-grey border-3"></div>,
      type: "inputBox",
    },
    {
      label: "Yes/No",
      icon: (
        <div className="d-flex align-items-center border border-light-grey">
          <div className="bg-light-grey text-white px-1">Y</div>
          <div className="px-1">N</div>
        </div>
      ),
      type: "yesOrNo",
    },
    {
      label: "Switch",
      icon: <Switch size="30" className="text-light-grey" />,
      type: "switch",
    },
    {
      label: "Single Select",
      icon: <CheckSquareFill size="20" className="text-light-grey" />,
      type: "singleSelect",
    },
    {
      label: "Multiple Select",
      icon: (
        <div>
          <CheckSquareFill size="20" className="text-light-grey me-2" />
          <CheckSquareFill size="20" className="text-light-grey" />
        </div>
      ),
      type: "multipleSelect",
    },
    {
      label: "Free Draw",
      icon: <Pencil size="20" className="text-light-grey" />,
      type: "freeDraw",
    },
    {
      label: "Fraction Field",
      icon: (
        <div>
          <Square size="20" className="text-light-grey" /> /
          <Square size="20" className="text-light-grey" />
        </div>
      ),
      type: "fraction",
    },
    {
      label: "Header",
      icon: null,
      type: "header",
    },
    {
      label: "Subheader",
      icon: null,
      type: "subHeader",
    },
    {
      label: "Reference Field",
      icon: (
        <div>
          <Square size="20" className="text-light-grey" />
          <RightArrowAlt size="20" className="text-light-grey" />
          <Square size="20" className="text-light-grey" />
        </div>
      ),
      type: "reference",
    },
  ];

  const addNodeToTree = (node) => {
    const { value, serverParentId } = node;

    setLoadingStatus(true);
    formBuilderService
      .addNode({
        operation: "add",
        node_id: serverParentId,
        label: "",
        data: value,
      })
      .then((res) => {
        if (res["new_node"]["id"]) node.serverId = res["new_node"]["id"];
      })
      .catch((error) => {})
      .finally(() => {
        setLoadingStatus(false);
      });
  };

  const appendNodeToTree = (node) => {
    const { value, serverParentId } = node;

    setLoadingStatus(true);
    formBuilderService
      .appendNode({
        operation: "append",
        node_id: serverParentId,
        label: "child4",
        position: "right",
        data: value,
      })
      .then((res) => {
        if (res["new_node"]["id"]) node.serverId = res["new_node"]["id"];
      })
      .catch((error) => {
        console.log(error, "error in append node to tree");
      })
      .finally(() => {
        setLoadingStatus(false);
      });
  };

  const deleteNodeFromTree = (id) => {
    setLoadingStatus(true);

    formBuilderService
      .deleteNode({
        operation: "delete",
        node_id: id,
      })
      .then(() => {})
      .catch(() => {})
      .finally(() => setLoadingStatus(false));
  };

  const createForm = (node) => {
    setLoadingStatus(true);

    formBuilderService
      .createForm({
        tenant: 1,
        name: "patient form",
      })
      .then((res) => {
        formBuilderRef.current.formId = res.tree.id;
        formBuilderService
          .addNode({
            operation: "add",
            node_id: res.tree.id,
            label: "",
            data: node.value,
          })
          .then((res) => {
            if (res["new_node"]) {
              node["serverId"] = res.new_node.id;
              node["serverParentId"] = formBuilderRef.current.formId;
            }
          })
          .catch((error) => console.log(error, "creating first node"));
      })
      .catch((error) => console.log(error, "error in form creation"))
      .finally(() => {
        setLoadingStatus(false);
      });
  };

  // useEffect(() => {
  //   if (renderItems.length === 1 && !formBuilderRef.current.formId) {
  //     // ToDo: have to add dynamically tenant and name
  //     setLoadingStatus(true);

  //     formBuilderService
  //       .createForm({
  //         tenant: 1,
  //         name: "patient form",
  //       })
  //       .then((res) => {
  //         formBuilderRef.current.formId = res.tree.id;
  //         formBuilderService
  //           .addNode({
  //             operation: "add",
  //             node_id: res.tree.id,
  //             label: "",
  //             data: {},
  //           })
  //           .then((res) => {
  //             console.log(res, "in creating");
  //             if (res["new_node"]) {
  //               const list = [...renderItems];
  //               list[0]["serverId"] = res.new_node.id;
  //               list[0]["serverParentId"] = formBuilderRef.current.formId;
  //               setRenderItems(list);
  //             }
  //           })
  //           .catch((error) => console.log(error, "creating first node"));
  //       })
  //       .catch((error) => console.log(error, "error in form creation"))
  //       .finally(() => {
  //         setLoadingStatus(false);
  //       });
  //   } else {
  //     if (formBuilderRef.current.operation === "append") {
  //       // added items->current node
  //       const addedItems = renderItems.filter((ele) => {
  //         if (ele.uid === formBuilderRef.current.id) return ele;
  //       });
  //       // parentElements
  //       const parentElements = renderItems.filter((ele) => {
  //         if (ele.uid === addedItems[0].parentId) return ele;
  //       });
  //       setLoadingStatus(true);
  //       formBuilderService
  //         .appendNode({
  //           operation: "append",
  //           node_id: parentElements[0]["serverId"],
  //           label: "child4",
  //           position: "right",
  //           data: { lastname: "12345", firstname: "gowthami" },
  //         })
  //         .then((res) => {
  //           console.log(res.new_node.id, "after appending");
  //           const list = [...renderItems];
  //           list.forEach((ele) => {});
  //         })
  //         .catch((error) => {
  //           console.log(error, "error in appending");
  //         })
  //         .finally(() => {
  //           setLoadingStatus(false);
  //         });
  //     }
  //   }
  // }, [renderItems]);

  const renderItemsOfTree = () => {
    let queue = [...treeInstance.root.children];
    let output = [];
    let level = 0;
    let previousLevel = 0;
    let temp = [];
    while (queue.length > 0) {
      const node = queue.shift();

      if (node.children.length > 0) {
        node.children.forEach((ele, index) => {
          temp.push(ele);
        });
      }
      const finalLength = output.length;
      const { children, ...rest } = node;
      if (finalLength > 0) {
        output[finalLength - 1].push(rest);
      } else {
        output.push([rest]);
      }

      if (queue.length === 0 && temp.length > 0) {
        output.push([]);
        queue = [...temp];
        temp = [];
      }
    }

    setRenderItems(output);
  };

  const handleChangeTool = (element: any) => {
    setSelectedTool(element.label);

    if (treeInstance.root?.children.length === 0) {
      const node = new Node({ label: "", type: element.label, relation: false });
      treeInstance.addNodeAsChildrenForParticularParent(node);
      createForm(node);
    } else {
      setDepth(depth + 1);
      // setInstance(
      const node = new Node({ label: "", type: element.label, relation: false });
      treeInstance.addNodeAtParticularLevel(
        depth + 1,
        node
        // )
      );
      addNodeToTree(node);
    }
    renderItemsOfTree();
  };

  const onPressColumn = (dep) => {
    const newlyCreatedNode = new Node({ label: "", type: "dummy", relation: false });
    treeInstance.addNodeAtParticularLevel(dep, newlyCreatedNode);
    appendNodeToTree(newlyCreatedNode);
    renderItemsOfTree();
  };

  const updateNodeValue = (id) => {
    treeInstance.updateParticularNodeValue(id, { label: "", type: "updated", relation: false });
    renderItemsOfTree();
  };

  const onRemoveItem = (id, serverId, dpth) => {
    treeInstance.removeNode(id, dpth);
    deleteNodeFromTree(serverId);
    renderItemsOfTree();
  };

  const RenderFormItem = ({ col, index }) => {
    return (
      <div
        className="px-5 py-3 bg-secondary me-5 field-item-container position-relative"
        // onClick={() => updateNodeValue(col.id)}
      >
        <div className="mb-2 d-flex align-items-center">
          <div>
            <small className="fw-bold text-base-black">
              {col.value.type ? col.value.type : "Add Label"}
            </small>
            <Pencil className="text-base-black ms-3" size="20" />
          </div>

          <div className="ms-auto" onClick={() => onRemoveItem(col.uid, col.serverId, index)}>
            <Delete className="text-red" size="30" />
          </div>
        </div>
        <div className="w-100 py-2 border bg-white rounded px-2">{col.value.type}</div>
      </div>
    );
  };

  const renderForm = () => {
    {
      return renderItems.map((row, index) => {
        return (
          <div key={index}>
            <div className="d-flex align-items-center my-5 ">
              {row.map((col, ind) => {
                return <RenderFormItem key={`${ind}${index}`} col={col} index={index} />;
              })}
              <div className="ms-auto me-4" onClick={() => onPressColumn(index)}>
                +
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <AdminLayout>
      {loading ? (
        <Loader />
      ) : (
        <CommonCard>
          <div className="border-bottom py-3 d-flex align-items-center">
            <h6>Form Builder</h6>
            <div className="ms-auto d-flex align-items-center">
              <p className="m-0">Legend : </p>
              {options.map((option, id) => {
                const Icon = option.icon;
                return (
                  <div key={id} className="ms-3">
                    <Icon size="20" color={option.color} /> <small>{option.name}</small>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 border">
              <div className="border-bottom p-3">
                <h6 className="m-0">Form Tools</h6>
              </div>
              <div className="d-flex justify-content-between border-bottom">
                <div className="p-3 border-primary border-1 border-bottom border-primary">
                  <small className="text-primary">New Fields</small>
                </div>
                <div className="p-3">
                  <small>Field Clipboard</small>
                </div>
              </div>
              {tools.map((ele, index) => {
                return (
                  <div key={index} onClick={() => handleChangeTool(ele)}>
                    <div className="d-flex align-items-center py-2">
                      {ele.label} <div className="ms-auto">{ele.icon}</div>
                    </div>
                    <div className="bg-light-grey-two" style={{ height: 1 }}></div>
                  </div>
                );
              })}
            </div>
            <div className="col-9 px-5">
              <div className="border h-85 overflow-auto p-3 px-5">
                <div className="py-2 px-2">
                  <small className="text-base-black fw-bold">Choose a form</small>
                </div>
                <div className="bg-light-grey-two" style={{ height: 1 }}></div>
                {renderForm()}
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="ms-auto">
                  <div className="btn">Save as</div>
                  <div className="btn btn-primary text-white">Save</div>
                </div>
              </div>
            </div>
          </div>
        </CommonCard>
      )}
    </AdminLayout>
  );
};

export default FormBuilder;
