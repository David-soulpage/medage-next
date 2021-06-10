// react
import React, { FC } from "react";
// components
import { AddStudyForm } from "components/forms";
import RadiologyLayout from "layouts/RadiologyLayout";
const AddNewStudy: FC = () => {
  return (
    <RadiologyLayout>
      <div className="card w-100 p-4">
        <AddStudyForm />
      </div>
    </RadiologyLayout>
  );
};

export default AddNewStudy;
