"use client";
import style from "./tab.module.css";
import { ChangeEventHandler, useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const clickTab = (selectedTab: string) => {
    setTab(selectedTab);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={() => clickTab("rec")}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={() => clickTab("fol")}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
