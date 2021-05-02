import React from "react";
import ParametersList from "./parameters-list";

const Parameters: React.FC = () => {
  return (
    <fieldset className="form__item form__parameters" name="parameters">
      <legend className="visually-hidden">Физические параметры</legend>
      <div className="inputs-group">
        <ParametersList />
      </div>
    </fieldset>
  );
};

export default Parameters;
