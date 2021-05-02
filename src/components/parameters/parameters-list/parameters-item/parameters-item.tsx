import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { ActionCreator } from "../../../../store//parameters/parameters";

interface ParametersItemProps {
  parameter: string;
  title: string;
  unit: string;
}

const ParametersItem: React.FC<ParametersItemProps> = ({
  parameter,
  title,
  unit,
}) => {
  const parameters = useTypedSelector((state) => state.PARAMETERS);
  const dispatch = useDispatch();

  return (
    <div className="input">
      <div className="input__heading">
        <label className="heading" htmlFor={parameter}>
          {title}
        </label>
        <span className="input__heading-unit">{unit}</span>
      </div>
      <div className="input__wrapper">
        <input
          onChange={(evt) => dispatch(ActionCreator.changeParameters(evt))}
          type="text"
          id={parameter}
          name={parameter}
          placeholder={String(parameters[parameter])}
          inputMode="decimal"
          maxLength={3}
          required
        />
      </div>
    </div>
  );
};

export default ParametersItem;
