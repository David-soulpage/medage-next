import React from "react";
import { CommonCard } from "@components/card";
import { PatientDetailsSmall, Pharmacies } from "@components/elements";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";

const Pharmacy = () => {
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
            <Pharmacies />
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default Pharmacy;
