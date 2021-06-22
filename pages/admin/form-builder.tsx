import React, { useEffect, useState, useRef } from "react";
//local components
import { CommonCard } from "components/card";
import Loader from "components/elements/Loader";
import { FormBuilderModal } from "components/modal";
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
// utils
import Tree from "lib/utils/tree";
import Node from "lib/utils/node";
// services
import FormBuilderService from "lib/services/form-builder.service";
import FormBuilderComponent from "components/elements/FormBuilderComponents";
import DataTable from "react-data-table-component";

const treeInstance = new Tree(new Node({ label: "root" }));
const formBuilderService = new FormBuilderService();
const FormBuilder = () => {
  const [selectedTool, setSelectedTool] = useState("");
  const [renderItems, setRenderItems] = useState([]);
  const [depth, setDepth] = useState(0);
  const formBuilderRef = useRef({ formId: null, operation: null, id: null, parentId: null });
  const [loading, setLoadingStatus] = useState(false);
  const [showModal, setModalStatus] = useState(false);

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
        node_id: serverParentId ? serverParentId : formBuilderRef.current.formId,
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

  const renderItemsOfTree = () => {
    let queue = [...treeInstance.root.children];
    let output = [];
    let level = 0;
    let previousLevel = 0;
    let temp = [];
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node, "node");
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

    console.log(output, "output");

    setRenderItems(output);
  };

  const handleChangeTool = (element: any) => {
    setSelectedTool(element.label);

    if (treeInstance.root?.children.length === 0) {
      const node = new Node({ label: "", type: element.label, relation: false });
      treeInstance.addNodeAsChildrenForParticularParent(node);
      // createForm(node);
    } else {
      setDepth(depth + 1);
      // setInstance(
      const node = new Node({ label: "", type: element.label, relation: false });
      treeInstance.addNodeAtParticularLevel(depth + 1, 0, node);

      // addNodeToTree(node);
    }
    renderItemsOfTree();
  };

  const handleEdit = (e) => {};

  const onCloseModal = () => {
    setModalStatus(false);
  };

  const onPressItem = (value: any) => {
    const { data, type } = value;
    switch (type) {
      case "plus": {
        const { depth, position } = data;
        const newlyCreatedNode = new Node({
          label: "",
          type: `dum${depth}-${position}`,
          relation: false,
        });
        treeInstance.addNodeAtParticularLevel(depth, position, newlyCreatedNode);
        // appendNodeToTree(newlyCreatedNode);

        break;
      }

      case "delete": {
        const { id, serverId, depth } = data;
        treeInstance.removeNode(id, depth);
        // deleteNodeFromTree(serverId);

        break;
      }
      case "update": {
        const { depth, position, id } = data;
        treeInstance.updateParticularNodeValue(id, { label: "", type: "updated", relation: false });

        break;
      }
      case "onEdit": {
        const { event } = data;
        event.stopPropagation();
        setModalStatus(true);
        break;
      }
    }
    renderItemsOfTree();
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
                <FormBuilderComponent list={renderItems} onPressItem={onPressItem} />
                {/* <FormBuilderComponent /> */}
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="ms-auto">
                  <div className="btn">Save as</div>
                  <div className="btn btn-primary text-white">Save</div>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <FormBuilderModal
              label="Label"
              optionsList={[1, 2, 3]}
              show={showModal}
              onClose={onCloseModal}
            />
          )}
        </CommonCard>
      )}
    </AdminLayout>
  );
};

export default FormBuilder;
