import React, { useState } from "react";
//local components
import { CommonCard } from "components/card";
//layout
import { AdminLayout } from "layouts";
//icons
import { Edit, ArrowsMove, Attachment, Cancel } from "components/styled-icons";

const FormBuilder = () => {
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
          </div>
          <div className="col-9"></div>
        </div>
      </CommonCard>
    </AdminLayout>
  );
};

export default FormBuilder;
