import React, { useEffect, useState } from "react";
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
} from "components/styled-icons";
import Tree from "lib/utils/tree";
import Node from "lib/utils/node";

const treeInstance = new Tree(new Node({ label: "root" }));
const FormBuilder = () => {
  // console.log(treeInstance, "treeinstance in upper");
  const [selectedTool, setSelectedTool] = useState("");
  const [renderItems, setRenderItems] = useState([]);
  const [depth, setDepth] = useState(0);

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
      if (finalLength > 0) output[finalLength - 1].push(node.value);
      else output.push([node.value]);

      if (queue.length === 0 && temp.length > 0) {
        console.log(queue, "queue");

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
    // console.log(instance, "instance123");
    if (treeInstance.root?.children.length === 0)
      treeInstance.addNodeAsChildrenForParticularParent(
        new Node({ label: "", type: element.type, relation: false })
      );
    else {
      setDepth(depth + 1);
      // setInstance(
      treeInstance.addNodeAtParticularLevel(
        depth + 1,
        new Node({ label: "", type: element.type, relation: false })
        // )
      );
    }
    renderItemsOfTree();
  };

  const onPressColumn = (dep) => {
    treeInstance.addNodeAtParticularLevel(
      dep,
      new Node({ label: "", type: "dummy col", relation: false })
    );
    console.log(treeInstance, "treeInstance");
    renderItemsOfTree();
  };
  return (
    <AdminLayout>
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
            <div className="border h-85">
              <div className="py-2 px-2">
                <small className="text-base-black fw-bold">Choose a form</small>
              </div>

              <div className="bg-light-grey-two" style={{ height: 1 }}></div>
              {renderItems.map((row, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="row">
                      {row.map((col, ind) => {
                        return (
                          <div key={`${index}${ind}`} className="col p-5 bg-light-grey-two">
                            {col.type}
                          </div>
                        );
                      })}
                      <div className="ms-auto me-4 col" onClick={() => onPressColumn(index)}>
                        +
                      </div>
                    </div>
                    <div className="bg-light-grey" style={{ height: 2 }}></div>
                  </React.Fragment>
                );
              })}
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
    </AdminLayout>
  );
};

export default FormBuilder;
