import React from "react";
import SwitcherList from "./switcher-list";

const Gender: React.FC = () => {
  return (
    <div className="form__item">
      <h2 className="heading">Пол</h2>
      <SwitcherList />
    </div>
  );
};

export default Gender;
