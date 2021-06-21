// react
import React, { FC, useEffect, useState } from "react";
// helper functions
import { getMonthArray, getMonthOfDate, getWeekArray } from "lib/helper";
// styled icons
import { ChevronLeft, ChevronRight, Circle } from "components/styled-icons";
import { CalenderButton } from "components/buttons";
import { CustomDropDown } from "components/dropdown";
//react bootstrap
import { Modal, Form } from "react-bootstrap";

const buttonsList = ["Month", "Week", "Day"];

const AdminCalendar: FC = () => {
  const [activeButton, setActiveButton] = useState("Week");
  const [next, setNext] = useState(1);
  const [resultArray, setResultArray] = useState([]);
  const [show, setShow] = useState(false);

  const [day, setDay] = useState<any>(new Date());

  const onPress = (name) => {
    if (name === "Month") {
      setActiveButton("Month");
    } else if (name === "Week") {
      setActiveButton("Week");
    } else setActiveButton("Day");
  };

  useEffect(() => {
    if (activeButton === "Month") {
      setResultArray(getMonthArray(next));
    } else if (activeButton === "Week") {
      if (resultArray.length === 0) setResultArray(getWeekArray(new Date(), "right"));
      else setResultArray(getWeekArray(resultArray[0], "right"));
    }
  }, [activeButton, next]);

  const onPressPrevious = () => {
    if (activeButton === "Month") setNext(next - 1);
    else if (activeButton === "Week") {
      setResultArray(getWeekArray(resultArray[0], "left"));
    } else setDay(new Date(day.setDate(day.getDate() - 1)));
  };

  const onPressNext = () => {
    if (activeButton === "Month") setNext(next + 1);
    else if (activeButton === "Week")
      setResultArray(getWeekArray(resultArray[resultArray.length - 1], "right"));
    else setDay(new Date(day.setDate(day.getDate() + 1)));
  };

  const colorList = ["#26C0E2", "#605BFF", "#FF6A77", "#3A974C", "#FFCC00"];

  const RenderContent = () => {
    let calculatedArray = [];

    if (activeButton === "Day") calculatedArray = [day];
    else calculatedArray = resultArray;

    if (calculatedArray.length !== 0) {
      const firstElement = calculatedArray[0];

      return (
        <div className="w-100">
          <div className="d-flex align-items-center">
            <h6 className="fw-bold text-base-black mt-3">Calender</h6>
            <div className="d-flex ms-auto align-items-center">
              <div>
                <div className="d-flex align-items-center ">
                  <div
                    className="p-1 border border-base-light-black rounded me-1 "
                    onClick={onPressPrevious}
                  >
                    <ChevronLeft size="20" />
                  </div>
                  <div className="mx-2">
                    <small className="font-weight-bold">{`${getMonthOfDate(
                      firstElement
                    )} ${firstElement.getDate()} - ${
                      activeButton !== "Day"
                        ? calculatedArray[calculatedArray.length - 1].getDate()
                        : ""
                    },  ${firstElement.getFullYear()}`}</small>
                  </div>
                  <div
                    className="p-1 border border-base-light-black   rounded "
                    onClick={onPressNext}
                  >
                    <ChevronRight size="20" />
                  </div>
                </div>
              </div>
              <div className="mx-3">
                <CustomDropDown
                  optionsList={[
                    {
                      title: "All",
                      textStyles: "text-dark-grey fw-normal",
                    },
                  ]}
                  placeholder="Dr Fillmore"
                />
              </div>
              <div className="me-3">
                <CustomDropDown
                  optionsList={[
                    {
                      title: "All",
                      textStyles: "text-dark-grey fw-normal",
                    },
                  ]}
                  placeholder="Week"
                />
              </div>
              <button className="btn btn-sm btn-primary text-white" onClick={() => setShow(true)}>
                Add New Appointment
              </button>
            </div>
          </div>

          <div className="  table-responsive  mt-4 d-flex align-items-center">
            <table className="table table-bordered" width="100%">
              <thead className="rounded">
                <tr className="border-0 bg-light-purple-two">
                  {calculatedArray?.map((date: any, index) => {
                    return (
                      <th key={index} className="py-3 px-5 text-nowrap border-0 ">
                        <small className="fw-normal text-base-light-black">{`${date
                          .toString()
                          .slice(0, 3)}  ${date.getDate()}`}</small>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="border">
                {calculatedArray?.map((ele, index) => {
                  return (
                    <tr key={index}>
                      {calculatedArray?.map((date: any, ind) => {
                        return <td key={ind} className="py-3 px-5 text-nowrap border "></td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div></div>
          </div>
        </div>
      );
    } else return null;
  };

  const CalenderButtons = () => {
    return (
      <div className="d-flex  align-items-center">
        {buttonsList.map((ele, key) => {
          return (
            <CalenderButton
              title={ele}
              onPress={onPress}
              selected={activeButton === ele}
              key={key}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-100 row card p-3 g-0  my-3">
      {/* <CalenderButtons /> */}
      <RenderContent />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <h6 className="m-0">Add New Appointment</h6>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3">
            <div className="col-6">
              <Form.Label className="text-muted">Title</Form.Label>
              <Form.Control placeholder="Enter Here" />
            </div>
            <div className="col-6">
              <Form.Label className="text-muted">Select Doctor</Form.Label>
              <CustomDropDown
                optionsList={[
                  {
                    title: "All",
                    textStyles: "text-dark-grey fw-normal",
                  },
                ]}
                placeholder="Select"
              />
            </div>
            <div className="col-6">
              <Form.Label className="text-muted">Date</Form.Label>
              <Form.Control placeholder="Enter Here" />
            </div>
            <div className="col-6">
              <Form.Label className="text-muted">Time</Form.Label>
              <Form.Control placeholder="Enter Here" />
            </div>
            <div className="col-12 d-flex">
              <Form.Label className="text-muted">
                Color :
                {colorList.map((color, id) => (
                  <Circle size="20" color={color} key={id} className="ms-2" />
                ))}
              </Form.Label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light d-flex justify-content-start">
          <button className="btn btn-sm">Cancel</button>
          <button className="btn btn-sm btn-primary text-white">Add Appointment</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminCalendar;
