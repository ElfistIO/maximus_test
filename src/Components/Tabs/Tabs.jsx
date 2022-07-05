import { useState } from "react";

import style from "./Tabs.module.scss";

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Самый дешевый",
      title: "Список дешевых рейсов",
    },
    {
      id: 2,
      tabTitle: "Самый быстрый",
      title: "Список быстрых рейсов",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className={style.tabs__wrapper}>
      <div className={style.tabs__buttons}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={style.tabs__content}>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p>{tab.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
