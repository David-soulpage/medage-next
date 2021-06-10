import React from "react";
//icons
import { CheckDouble } from "@styled-icons/remix-line";

const SignDocuments = () => {
  return (
    <div className="py-4">
      <p className="text-muted">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
        graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
        century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
        use in a type specimen book.
      </p>
      <p className="text-muted">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
        graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
        century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
        use in a type specimen book.
      </p>{" "}
      <p className="text-muted">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
        graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
        century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
        use in a type specimen book.
      </p>{" "}
      <p className="text-muted">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
        graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
        century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
        use in a type specimen book.
      </p>{" "}
      <p className="text-muted">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
        graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
        century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
        use in a type specimen book.
      </p>
      <div className="d-flex mt-5 flex-column">
        <div>
          <small className="text-muted">Signature of the patient or personal representative</small>
        </div>
        <h6 className="mt-3">
          John W. Preece <CheckDouble size="20" className="text-success" />{" "}
        </h6>
      </div>
    </div>
  );
};

export default SignDocuments;
