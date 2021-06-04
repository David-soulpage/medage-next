import { CommonCard, DoctorProfileCard } from "@components/card";
import { PatientDetailsSmall } from "@components/elements";
import { ProblemsTable } from "@components/tables";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import React from "react";

const CareTeam = () => {
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
              <h6 className="text-dark mb-3">Care Team</h6>
              {/* Doctor Profile Card */}
              <div className="row mt-4">
                <div className="col-lg-2">
                  <CommonCard additionalStyles="border-1">
                    <DoctorProfileCard />
                  </CommonCard>
                </div>
              </div>
            </CommonCard>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default CareTeam;
