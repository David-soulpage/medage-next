// react
import React, { FC, useEffect, useState } from "react";
// helper functions
import { getMonthArray, getMonthOfDate, getWeekArray } from "lib/helper";
// styled icons
import { ChevronLeft, ChevronRight } from "@styled-icons/boxicons-regular";
import { CalenderButton } from "@components/buttons";

const buttonsList = ["Month", "Week", "Day"];

const CustomCalender: FC = () => {
  const [activeButton, setActiveButton] = useState("Week");
  const [next, setNext] = useState(1);
  const [resultArray, setResultArray] = useState([]);

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

  const RenderContent = () => {
    let calculatedArray = [];

    if (activeButton === "Day") calculatedArray = [day];
    else calculatedArray = resultArray;

    if (calculatedArray.length !== 0) {
      const firstElement = calculatedArray[0];

      return (
        <div className="w-100">
          <div className="d-flex align-items-center justify-content-between w-100 mt-2 ">
            <div>
              <small className="font-weight-bold">{`${getMonthOfDate(
                firstElement
              )} ${firstElement.getDate()} - ${
                activeButton !== "Day" ? calculatedArray[calculatedArray.length - 1].getDate() : ""
              },  ${firstElement.getFullYear()}`}</small>
            </div>
            <div className="d-flex align-items-center ">
              <div
                className="p-1 border border-base-light-black rounded me-1 "
                onClick={onPressPrevious}
              >
                <ChevronLeft size="20" />
              </div>
              <div className="p-1 border border-base-light-black   rounded " onClick={onPressNext}>
                <ChevronRight size="20" />
              </div>
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
    <div className=" row card p-3  my-3">
      <h6 className="fw-bold text-base-black">Calender</h6>
      <CalenderButtons />
      <RenderContent />
    </div>
  );
};

export default CustomCalender;
