import React, { FC } from "react";
//react bootstrap
import { Modal } from "react-bootstrap";
interface ICommonModal {
  show: boolean;
  onHide: () => void;
  centered?: boolean;
  children: React.ReactNode;
}

const CommonModal: FC<ICommonModal> = ({ children, show, onHide, centered }: any) => {
  return (
    <Modal show={show} onHide={onHide} centered={centered}>
      {children}
    </Modal>
  );
};
export default CommonModal;

export const ModalHeader = ({ children }: any): any => <Modal.Header>{children}</Modal.Header>;
export const ModalBody = ({ children }: any): any => <Modal.Body>{children}</Modal.Body>;
export const ModalFooter = ({ children, footerStyles = "" }): any => (
  <Modal.Footer className={footerStyles}>{children}</Modal.Footer>
);
