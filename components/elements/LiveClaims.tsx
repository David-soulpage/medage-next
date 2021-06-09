import React from "react";
//local components
import { CommonCard } from "@components/card";
//icons
import { ChevronRight } from "@styled-icons/bootstrap";
//react chartjs
import { Pie } from "react-chartjs-2";

const LiveClaims = () => {
  const data = {
    labels: ["claims recieved", "Claims in process", "Claims requiring actions"],
    datasets: [
      {
        label: "# of Votes",
        data: [18, 25, 58],
        backgroundColor: ["#DABDE9", "#90EAAA", "#8FD4F3"],
      },
    ],
  };
  return (
    <>
      <CommonCard>
        <div className="d-flex align-items-center">
          <h6 className="m-0">Live Claims</h6>
          <ChevronRight size="20" className="ms-auto" />
        </div>
        {/* Pie Chart */}
        <Pie data={data} type="pie" />
      </CommonCard>
    </>
  );
};

export default LiveClaims;
