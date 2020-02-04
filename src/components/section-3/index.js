import React, { useState } from "react";
import { Column, Modal } from "../../uiComponents";
import Shellsvg from './shellsvg'

const SectionThird = () => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <Column size="small">
      <div className="clamp-outer" onClick={() => openModal()}>
        <Shellsvg />
      </div>

      {visible === true && (
        <Modal
          title="Confirm"
          body="Lorem Ipsum Dolor Sit"
          closeModal={() => closeModal()}
        />
      )} 
    </Column>
  );
};

export default SectionThird;
