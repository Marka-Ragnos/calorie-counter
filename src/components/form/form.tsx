import React from "react";
import Gender from "../gender";
import Parameters from "../parameters";
import Activity from "../activity";
import SubmitForm from "../submit-form";

const Form: React.FC = () => {
  return (
    <form
      className="counter__form form"
      name="counter"
      action="#"
      method="post"
    >
      <Gender />
      <Parameters />
      <Activity />
      <SubmitForm />
    </form>
  );
};

export default Form;
