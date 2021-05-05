import React from "react";
import { ResultTypeItem } from "../../../../mock/typesMock";

const ResultItem: React.FC<ResultTypeItem> = ({ title, text, calories }) => {
  return (
    <li className="counter__result-item">
      <h3>
        <span id={`calories-${title}`}>{calories}</span> ккал
      </h3>
      <p>{text}</p>
    </li>
  );
};

export default ResultItem;
