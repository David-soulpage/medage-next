import { CommonCard } from "@components/card";
import { PatientDetailsSmall } from "@components/elements";
import { AllergiesTable } from "@components/tables";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import React from "react";

const Allergies = () => {
  return (
    <DoctorDashboardLayout>
      <div className="container mt-5">
        {/* Patient Details */}
        <div className="row g-3">
          <div className="col-12">
            <CommonCard>
              <PatientDetailsSmall />
            </CommonCard>
          </div>
          <div className="col-12">
            <AllergiesTable />
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default Allergies;
