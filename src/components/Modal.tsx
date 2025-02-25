import React from "react";
import { useEffect } from "react";
import "/assets/css/Modal.css";

interface ModalProps {
  modalId: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  modalId,
  title,
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    const closeButton = document.querySelectorAll(".close-btn");
    closeButton.forEach((btn) => {
      btn.addEventListener("click", function (this: HTMLElement) {
        let modal = this.closest(".modal");
        if (modal) {
          onClose();
        }
      });
    });
  }, [onClose]);

  return (
    <div
      id={modalId}
      className={`modal ${isOpen ? "active" : ""}`}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
