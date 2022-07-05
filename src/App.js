import { useState } from "react";
import { InputCheckbox } from "./Components/Input/InputCheckbox";
import { Modal } from "./Components/Modal/Modal";
import { Tabs } from "./Components/Tabs/Tabs";

import style from "./App.module.scss";

function App() {
  const [isModal, setIsModal] = useState(false);
  const onClose = () => setIsModal(false);

  const options = [
    {
      option: "Sarabanda",
    },
    {
      option: "Minibanda",
    },
    {
      option: "iDO",
    },
    {
      option: "Superga",
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.input__wrapper}>
        <div className={style.input__checkboxRadio}>
          {options.map((option) => (
            <InputCheckbox option={option.option} />
          ))}
        </div>
      </div>
      <hr />
      <div className={style.feedback__wrapper}>
        <button
          className={style.feedback__button}
          onClick={() => setIsModal(true)}
        >
          Заказать консультацию
        </button>
      </div>
      <Modal visible={isModal} onClose={onClose} />
      <hr />
      <Tabs />
    </div>
  );
}

export default App;
