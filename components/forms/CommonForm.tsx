// react
import React, { FC } from "react";
// formik
import { useFormik } from "formik";
// boostrap
import { Form } from "react-bootstrap";
// components
import { CustomDropDown } from "@components/dropdown";
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

  const handleSelect = (name, value) => {
    formik.setFieldValue(name, value);
  };
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className={`row w-85 ${props.styles.row} d-flex align-items-end`}>
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
                <Form.Label className={`${props.styles.formLabel}`}>{ele.title}</Form.Label>
                {ele.subType === "dropDown" ? (
                  <CustomDropDown optionsList={ele.optionsList} placeholder={ele.placeholder} />
                ) : ele.subType === "radio" ? (
                  <div className="row ">
                    {ele.optionsList.map((ele, index) => {
                      return (
                        <div className="col-3 mb-3" key={index}>
                          <Form.Check type="radio" label={ele} />
                        </div>
                      );
                    })}
                  </div>
                ) : (
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
                )}
              </Form.Group>
              {props.underline && (
                <div className="bg-light-grey-two w-100 my-2" style={{ height: 1 }}></div>
              )}
            </div>
          );
        })}
      </div>
      {props.buttonsList.map((ele, index) => {
        return (
          <button className={`${ele.buttonStyles}`} key={index} type={ele.type}>
            <small className={`${ele.buttonTextStyles}`}>{ele.title}</small>
          </button>
        );
      })}
    </Form>
  );
};
export default CommonForm;
