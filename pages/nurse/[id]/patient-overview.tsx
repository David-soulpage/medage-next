import React from "react";
import Head from "next/head";
//local components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
//icons
import { ThreeDotsVertical } from "components/styled-icons";
import { Capsule } from "components/styled-icons";
import { DotFill } from "components/styled-icons/";

const PatientOverview = () => {
  const medications = [
    {
      name: "Azelastine (Astelin, Astepro)",
      timings: "1-0-1",
    },
    {
      name: "Azelastine (Astelin, Astepro)",
      timings: "1-0-1",
    },
    {
      name: "Azelastine (Astelin, Astepro)",
      timings: "1-0-1",
    },
    {
      name: "Azelastine (Astelin, Astepro)",
      timings: "1-0-1",
    },
  ];

  const results = [
    {
      name: "X-Ray - John Smith",
      date: "26/05/2021",
    },
    {
      name: "X-Ray - John Smith",
      date: "26/05/2021",
    },
    {
      name: "X-Ray - John Smith",
      date: "26/05/2021",
    },
    {
      name: "X-Ray - John Smith",
      date: "26/05/2021",
    },
  ];
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Patient Overview</title>
      </Head>
      <PatientDashboardLayout>
        <div className="container pt-2">
          <h6 className="fw-bold">Patient Overview</h6>
          <CommonCard>
            <div className="card p-2 shadow-sm">
              <PatientDetailsSmall />
=======
    <PatientDashboardLayout>
      <div className="container pt-2">
        <h6 className="fw-bold">Patient Overview</h6>
        <CommonCard>
          <div className="card p-2 shadow-sm">
            <PatientDetailsSmall />
          </div>
          <div className="row mt-3 g-3">
            <div className="col-md-4">
              <div className="card shadow-sm pt-2">
                <div className="d-flex align-items-center p-3 border-bottom">
                  <h6 className="m-0">Current Medications</h6>
                  <ThreeDotsVertical size="20" className="ms-auto" />
                </div>
                {medications.map((medication, id) => (
                  <div className="d-flex justify-content-between p-3 border-bottom">
                    <Capsule size="20" className="text-primary" />
                    <p className="m-0">{medication.name}</p>
                    <p className="m-0">{medication.timings}</p>
                  </div>
                ))}
              </div>
>>>>>>> fca0adb2c2517781c4c382e55ff1fffc8fc1765f
            </div>
            <div className="row mt-3 g-3">
              <div className="col-md-4">
                <div className="card shadow-sm pt-2">
                  <div className="d-flex align-items-center p-3 border-bottom">
                    <h6 className="m-0">Current Medications</h6>
                    <ThreeDotsVertical size="20" className="ms-auto" />
                  </div>
                  {_.map(medications, (medication, id) => (
                    <div className="d-flex justify-content-between p-3 border-bottom">
                      <Capsule size="20" className="text-primary" />
                      <p className="m-0">{medication.name}</p>
                      <p className="m-0">{medication.timings}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm pt-2 h-100">
                  <div className="d-flex align-items-center p-3 border-bottom">
                    <h6 className="m-0">Vitals</h6>
                    <ThreeDotsVertical size="20" className="ms-auto" />
                  </div>
                  <div className="row h-100 g-5 py-3">
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                      <DotFill size="20" className="text-muted" />
                      <p className="m-0 mt-3 fw-bold">Blood Pressure</p>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                      <DotFill size="20" className="text-muted" />
                      <p className="m-0 mt-3 fw-bold">Pulse</p>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                      <DotFill size="20" className="text-muted" />
                      <p className="m-0 mt-3 fw-bold">Diastolic B.P</p>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                      <DotFill size="20" className="text-muted" />
                      <p className="m-0 mt-3 fw-bold">Systolic B.P</p>
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <div className="col-md-4">
                <div className="card shadow-sm pt-2">
                  <div className="d-flex align-items-center p-3 border-bottom">
                    <h6 className="m-0">Lab Results</h6>
                    <ThreeDotsVertical size="20" className="ms-auto" />
=======
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm pt-2">
                <div className="d-flex align-items-center p-3 border-bottom">
                  <h6 className="m-0">Lab Results</h6>
                  <ThreeDotsVertical size="20" className="ms-auto" />
                </div>
                {results.map((result, id) => (
                  <div className="d-flex justify-content-between p-3 border-bottom">
                    <DotFill size="20" className="text-muted" />
                    <p className="m-0">{result.name}</p>
                    <p className="m-0">{result.date}</p>
>>>>>>> fca0adb2c2517781c4c382e55ff1fffc8fc1765f
                  </div>
                  {_.map(results, (result, id) => (
                    <div className="d-flex justify-content-between p-3 border-bottom">
                      <DotFill size="20" className="text-muted" />
                      <p className="m-0">{result.name}</p>
                      <p className="m-0">{result.date}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-12">
                <div className="card shadow-sm pt-2">
                  <div className="d-flex align-items-center p-3 border-bottom">
                    <h6 className="m-0">Notes</h6>
                    <ThreeDotsVertical size="20" className="ms-auto" />
                  </div>
                  <div className="p-3">
                    <p className="text-muted">10/05/2021</p>
                    <small className="text-muted">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                      out print, graphic or web designs. The passage is attributed to an unknown
                      typesetter in the 15th century who is thought to have scrambled parts of
                      Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It
                      usually begins with: Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The passage is
                      attributed to an unknown typesetter in the 15th century who is thought to have
                      scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type
                      specimen book. It usually begins with:
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </CommonCard>
        </div>
      </PatientDashboardLayout>
    </>
  );
};

export default PatientOverview;
