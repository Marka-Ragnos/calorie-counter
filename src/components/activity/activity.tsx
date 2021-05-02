import React from "react";
import ActivityList from "./activity-list";

const Activity: React.FC = () => {
  return (
    <fieldset className="form__item">
      <legend className="heading">Физическая активность</legend>
      <ActivityList />
    </fieldset>
  );
};

export default Activity;
