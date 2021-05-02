import React from "react";
import { ParametersData } from "../../../mock";
import ParametersItem from "./parameters-item";

const ParametersList: React.FC = () => {
  return (
    <>
      {ParametersData.map((item, idx) => (
        <ParametersItem
          key={item.parameter + idx}
          parameter={item.parameter}
          title={item.title}
          unit={item.unit}
        />
      ))}
    </>
  );
};

export default ParametersList;
