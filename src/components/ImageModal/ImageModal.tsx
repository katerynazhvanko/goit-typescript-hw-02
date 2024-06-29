import React from "react";
import ReactModal from "react-modal";
import { Image } from "../../App/App.types";
import { ImHeart } from "react-icons/im";

import css from "./ImageModal.module.css";
import { CSSProperties } from "react";

ReactModal.setAppElement("#root");

const customStyles: {
  overlay: CSSProperties;
  content: CSSProperties;
} = {
  overlay: {
    position: "fixed",
    backgroundColor: "#121212",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

interface ImageModalProps {
  openModal: boolean;
  handleCloseModal: () => void;
  modalItem: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  openModal,
  handleCloseModal,
  modalItem,
}) => {
  if (!modalItem) {
    return null;
  }
  return (
    <ReactModal
      style={customStyles}
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Image Modal"
    >
      <div className={css.container}>
        <img
          src={modalItem.urls.regular}
          alt={modalItem.alt_description}
          className={css.photo}
        />
        <p className={css.description}>{modalItem.description}</p>
        <p className={css.author}>
          Author: {modalItem.user?.name || "Unknown"}
        </p>
        <p className={css.likes}>
          <ImHeart className={css.heart} />
          Likes: {modalItem.likes}
        </p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
