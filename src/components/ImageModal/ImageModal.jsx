import ReactModal from "react-modal";
import { ImHeart } from "react-icons/im";

import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const customStyles = {
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

export default function ImageModal({ openModal, handleCloseModal, modalImg }) {
  console.log(modalImg);
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
          src={modalImg.urls.regular}
          alt={modalImg.alt_description}
          className={css.photo}
        />
        <p className={css.description}>{modalImg.description}</p>
        <p className={css.author}>Author: {modalImg.user.name}</p>
        <p className={css.likes}>
          <ImHeart className={css.heart} />
          Likes: {modalImg.likes}
        </p>
      </div>
    </ReactModal>
  );
}

/* 
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    padding: "0",
    background: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
};
*/

/*.box {
  position: relative;
}

.button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 4px;
  right: 4px;
  padding: 4px;
  background-color: #ffffff55;
  cursor: pointer;
}

.button:hover {
  background-color: #ffffffad;
} 
*/
