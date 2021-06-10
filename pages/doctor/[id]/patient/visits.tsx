// react
import React from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const Visits = () => {
  const problems = ["Head Ache", "Fever", "Abdominal Pain", "Joint Pain"];
  const cards = [
    {
      date: "21/04/2021",
      title: "Additional Information",
      description: "Fever from last 4 days and mild headache with regular joint pains.",
    },
    {
      date: "21/04/2021",
      title: "Additional Information",
      description: "Fever from last 4 days and mild headache with regular joint pains.",
    },
    {
      date: "21/04/2021",
      title: "Additional Information",
      description: "Fever from last 4 days and mild headache with regular joint pains.",
    },
    {
      date: "21/04/2021",
      title: "Additional Information",
      description: "Fever from last 4 days and mild headache with regular joint pains.",
    },
  ];
  return (
    <>
      <Head>
        <title>Visits</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          {/* Patient Details */}
          <div className="row g-3">
            <div className="col-12">
              <CommonCard>
                <PatientDetailsSmall />
              </CommonCard>
            </div>
            <div className="col-12">
              <CommonCard>
                <div className="row g-3 mt-4">
                  {cards.map((item, id) => (
                    <div key={id} className="col-lg-4 col-12">
                      <div className="card p-3 h-100 rounded shadow-sm">
                        <div className="d-flex justify-content-between">
                          <h6 className="sub-title m-0 my-4">{item.date}</h6>
                        </div>
                        <div>
                          {problems.map((problem, id) => (
                            <button key={id} className="btn btn-sm bg-light-primary text-dark m-2">
                              {problem}
                            </button>
                          ))}
                          <button className="btn btn-sm bg-light-primary text-dark m-2">+</button>
                        </div>
                        <p className="title my-3">{item.title}</p>
                        <div className="bg-secondary text-dark p-2 border-0 border-radius-10">
                          <p className="m-0 sub-title">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Visits;
