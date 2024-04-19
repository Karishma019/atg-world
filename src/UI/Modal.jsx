import { createPortal } from "react-dom";
function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <div onClick={closeModal} className="modalBackdrop"></div>
      <div className="modalContent">{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
