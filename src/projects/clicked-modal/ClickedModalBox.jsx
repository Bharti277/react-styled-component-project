import React from "react";
import { Button, ModalBox } from "./ClickedModalStyled";

const ClickedModalBox = ({
  id,
  img,
  title,
  desc,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <>
      <ModalBox className={isModalOpen === id ? "open" : ""}>
        <div className="modal_centered">
          <div className="modalbox_content">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <Button type="button" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </ModalBox>
    </>
  );
};

export default ClickedModalBox;
