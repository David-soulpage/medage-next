// react
import React, { FC } from "react";

// props type
interface Iprops {
  selected: boolean;
  title: string;
  onPress: (title: string) => void;
}

// buttons in Calender component in radiology home screen
const CalenderButton: FC<Iprops> = ({ title, onPress, selected }) => {
  const onPressButton = () => {
    onPress(title);
  };

  return (
    <div
      className={`me-5 py-1   ${selected ? "border rounded border-light-white px-3" : ""}`}
      onClick={onPressButton}
    >
      <small>{title}</small>
    </div>
  );
};

export default CalenderButton;
