import React from "react";
import { CommonCard } from "@components/card";
import { PatientDetailsSmall } from "@components/elements";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import EmergencyContactTable from "@components/tables/EmergencyContactTable";

const EmergencyContact = () => {
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
            <CommonCard>
              <h6 className="title m-0">Diagnosis</h6>
              <EmergencyContactTable />
            </CommonCard>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default EmergencyContact;
