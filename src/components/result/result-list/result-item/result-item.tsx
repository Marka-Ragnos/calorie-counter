import React from "react";
import { ResultTypeItem } from "../../../../mock/typesMock";

const ResultItem: React.FC<ResultTypeItem> = ({ title, text }) => {
  return (
    <li className="counter__result-item">
      <h3>
        <span id={`calories-${title}`}>3 800</span> ккал
      </h3>
      <p>{text}</p>
    </li>
  );
};

export default ResultItem;
