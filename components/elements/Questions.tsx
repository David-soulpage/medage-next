import React, { FC } from "react";

interface IQuestions {
  setCurrent: any;
}
const Questions: FC<IQuestions> = ({ setCurrent }) => {
  return (
    <div>
      <div className="mt-3">
        <small className="text-muted">Please review and address the following documents</small>
      </div>
      <div className="border-top mt-3 py-3 d-flex flex-column align-items-start">
        <h6>Informed consent for release of info</h6>
        <small className="text-muted">Not signed yet</small>
        <button className="btn btn-outline-primary my-4">Review and sign</button>
        <small className="text-muted">
          Once this step is compelted, documents will be submitted for clinic review.
        </small>
        <div className="d-flex mt-3">
          <button className="btn">Back</button>
          <button className="btn mx-4">Later</button>
          <button className="btn btn-primary text-white" onClick={() => setCurrent("documents")}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
