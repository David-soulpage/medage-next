// react
import React, { FC } from "react";
// formik
import { useFormik } from "formik";
// boostrap
import { Form } from "react-bootstrap";
// components
import { CustomDropDown } from "components/dropdown";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// prop types
interface IProps {
  list: Array<any>;

  initialValues: any;
  styles: any;
  buttonsList: any;
  underline?: string;
  form?: string;
  onPressForm?: () => void;
}

const CommonForm: FC<IProps> = (props) => {
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: (values) => {
      props.onPressForm();
    },
  });

  const RenderBasedonSubType = ({ ele }: any) => {
    switch (ele.subType) {
      case "dropDown":
        return <CustomDropDown optionsList={ele.optionsList} placeholder={ele.placeholder} />;
      case "radio":
        return (
          <div className="row ">
            {ele.optionsList.map((ele, index) => {
              return (
                <div className="col-3 mb-3" key={index}>
                  <Form.Check type="radio" label={ele} />
                </div>
              );
            })}
          </div>
        );

      case "button":
        return (
          <button className={`${ele.buttonStyles}`}>
            <small className={`${ele.buttonTextStyles}`}>{ele.title}</small>
          </button>
        );

      case "date":
        return (
          <div className="">
            <DatePicker
              name="date"
              selected={formik.values[ele.name]}
              onChange={(date) => formik.setFieldValue("date", date)}
              className="form-control w-100"
            />
          </div>
        );
      default:
        return (
          <Form.Control
            name={ele.name}
            type={ele.textType}
            placeholder={ele.placeholder}
            onChange={formik.handleChange}
            value={formik.values[ele.name]}
            className={`${props.styles.formControl}`}
            as={ele.subType ? ele.subType : "input"}
            rows={ele["rows"] ? ele["rows"] : 1}
            // size={props.styles.size}
          />
        );
    }
  };

  const handleSelect = (name, value) => {
    formik.setFieldValue(name, value);
  };
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className={`row ${props.styles.row} d-flex align-items-end`}>
        {props.list.map((ele, index) => {
          return (
            <div
              key={index}
              className={
                ele["rows"]
                  ? "col-12"
                  : `col-${props.styles.col.small}> col-md-${props.styles.col.tablet} col-lg-${props.styles.col.large}`
              }
            >
              <Form.Group className={`${props.styles.formGroup}`}>
                {ele.subType !== "button" && (
                  <Form.Label className={`${props.styles.formLabel}`}>{ele.title}</Form.Label>
                )}
                <RenderBasedonSubType ele={ele} />
              </Form.Group>
              {props.underline && (
                <div className="bg-light-grey-two w-100 my-2" style={{ height: 1 }}></div>
              )}
            </div>
          );
        })}
      </div>
      <div className={`${props.styles.buttonsWrapper}`}>
        {props.buttonsList.map((ele, index) => {
          return (
            <button className={`${ele.buttonStyles}`} key={index} type={ele.type}>
              <small className={`${ele.buttonTextStyles}`}>{ele.title}</small>
            </button>
          );
        })}
      </div>
    </Form>
  );
};
export default CommonForm;
