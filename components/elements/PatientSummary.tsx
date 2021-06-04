// react
import React, { FC } from "react";
//lodash
import _ from "lodash";
//react data table
import DataTable from "react-data-table-component";
//icons
import { ThreeDotsVertical } from "@styled-icons/bootstrap";
import { CommonCard } from "@components/card";

const PatientSummary: FC = () => {
  const problems = ["Head Ache", "Fever", "Abdominal Pain", "Joint Pain"];
  const data = [
    {
      cardTitle: "Care Team",
      tableData: [
        {
          spcialist: "Dermatologist",
          doctor: "Dr. Willkins Axe",
        },
        {
          spcialist: "Dermatologist",
          doctor: "Dr. Willkins Axe",
        },
        {
          spcialist: "Dermatologist",
          doctor: "Dr. Willkins Axe",
        },
      ],
      background: "#EFF8F1",
    },
    {
      cardTitle: "Visits",
      tableData: [
        {
          problem: "Abdominal Pain",
          date: "16 Feb-21",
        },
        {
          problem: "Cold, Fungal infection",
          date: "21 Jan-21",
        },
        {
          problem: "Diabetes mellitus T2",
          date: "17 Jan-21",
        },
      ],
      background: "#F2EDFD",
    },
    {
      cardTitle: "Diagnosis (Clinical notes)",
      tableData: [
        {
          problem: "COPD",
          status: "Active",
          date: "16 Feb-21",
        },
        {
          problem: "Acute UTI",
          status: "Active",

          date: "21 Jan-21",
        },
        {
          problem: "Diabetes",
          status: "Active",

          date: "17 Jan-21",
        },
      ],
      background: "rgba(193, 79, 79, 0.1)",
    },
    {
      cardTitle: "Medications",
      tableData: [
        {
          medication: "Warfarin 1mg",
          dispense: "5.000",
          date: "16 Feb-21",
        },
        {
          medication: "12 Hour Nasal",
          dispense: "3.000",

          date: "21 Jan-21",
        },
        {
          medication: "B-12 Sub tablet",
          dispense: "20.000",

          date: "17 Jan-21",
        },
      ],
      background: "rgba(255, 197, 66, 0.1)",
    },
    {
      cardTitle: "Allergies",
      tableData: [
        {
          allergy: "Saw Dust Allergy",
          reaction: "Breath",
          status: "Active",
        },
        {
          allergy: "Pencilin",
          reaction: "Hives",

          status: "Active",
        },
        {
          allergy: "Non drug",
          reaction: "Itching",

          status: "Active",
        },
      ],
      background: "rgba(61, 213, 152, 0.1)",
    },
    {
      cardTitle: "Pharmacy",
      tableData: [
        {
          problem: "COPD",
          status: "Active",
          date: "23 Apr-2021",
        },
        {
          problem: "Acute UTI",

          status: "Active",
          date: "21 Apr-2021",
        },
        {
          problem: "Diabetes",

          status: "Active",
          date: "19 Mar-2021",
        },
      ],
      background: "rgba(208, 139, 91, 0.1)",
    },
    {
      cardTitle: "Tests",
      tableData: [
        {
          test: "HbA1C",
          dispense: "9.1",
          date: "23 Apr-2021",
        },
        {
          test: "FBS",

          dispense: "90",
          date: "21 Apr-2021",
        },
        {
          test: "SH",

          dispense: "2.1",
          date: "19 Mar-2021",
        },
      ],
      background: "rgba(201, 51, 5, 0.1)",
    },
    {
      cardTitle: "Emergency Contacts",
      tableData: [
        {
          name: "John",
          relation: "Father",
          number: "04087779",
        },
        {
          name: "Williams",

          relation: "Brother",
          number: "04089872",
        },
        {
          name: "Neesar",

          relation: "Brother",
          number: "04089876",
        },
      ],
      background: "rgba(242, 201, 76, 0.1)",
    },
  ];

  const CardInfo = ({ cardData }) => {
    const headers = Object.keys(cardData.tableData[0]);
    const columns = _.map(headers, (item) => {
      return { name: item, selector: item };
    });

    const customStyles = {
      headCells: {
        style: {
          background: "#fff",
          color: "#1E2233",
          fontSize: "16px",
          border: "none",
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      },

      rows: {
        style: {
          borderRadius: "3px",
          border: "none",
          marginTop: "5px",
          height: "50px",
          fontSize: "14px",
          background: cardData.background,
          fontWeight: "bold",
        },
      },
    };
    return (
      <CommonCard>
        <div className="d-flex justify-content-between">
          <h6 className="fw-bold m-0">{cardData.cardTitle}</h6>
          <ThreeDotsVertical className="text-dark" size="20" />
        </div>
        <div className="border-top mt-3" />
        <DataTable
          noHeader
          columns={columns}
          data={cardData.tableData}
          customStyles={customStyles}
        />
      </CommonCard>
    );
  };
  return (
    <div className="row g-3 mt-4">
      <div className="col-lg-4 col-md-6 col-12">
        <CommonCard>
          <div className="d-flex justify-content-between">
            <h6 className="fw-bold m-0">Active Problems</h6>
            <ThreeDotsVertical className="text-dark" size="20" />
          </div>
          <div className="border-top my-3" />
          <div>
            {_.map(problems, (problem, id) => (
              <button key={id} className="btn btn-sm bg-light-primary text-primary fw-bold m-2">
                {problem}
              </button>
            ))}
            <button className="btn btn-sm bg-light-primary text-primary fw-bold m-2">+</button>
          </div>
          <p className="fw-bold my-3">Additional Information</p>
          <div className="bg-secondary text-dark p-2 border-0 border-radius-10">
            <p className="m-0">
              Fever from last 4 days and mild headache with regular joint pains.
            </p>
          </div>
        </CommonCard>
      </div>

      {_.map(data, (item, id) => (
        <div key={id} className="col-lg-4 col-md-6 col-12">
          <CardInfo cardData={item} />
        </div>
      ))}
    </div>
  );
};

export default PatientSummary;
