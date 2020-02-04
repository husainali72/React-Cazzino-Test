import React from "react";
import Close from '../assets/images/close-icon.png'

const Modal = (props) => {

  return (
    <div className="modal-wrapper">
      <div className="modal-body">
        <div className="modal-header">
            <h5>{props.title}</h5>
            <span className="modal-close" onClick={() => props.closeModal()}>
              <img src={Close} alt="close" />
            </span>
        </div>
        <div className="modal-text">
            {props.body}
        </div>
      </div>
    </div>
  );
}

export default Modal;
