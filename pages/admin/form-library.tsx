import React, { useState } from "react";
//local components
import { CommonCard } from "components/card";
//layout
import { AdminLayout } from "layouts";
//icons
import { Edit, ArrowsMove, Attachment, Cancel } from "components/styled-icons";

const FormLibrary = () => {
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
          <h6>Form Library</h6>
        </div>
      </CommonCard>
    </AdminLayout>
  );
};

export default FormLibrary;
