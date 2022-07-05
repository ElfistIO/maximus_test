/* eslint-disable default-case */
import { useEffect } from "react";

import style from "./Modal.module.scss";

export const Modal = ({ visible = false, onClose }) => {
  const onKeydown = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <div className={style.modal} onClick={onClose}>
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__body}>Мы ждем вас на консультацию!</div>
        <div className={style.modal__footer}>
          <button className={style.modal__button} onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};
