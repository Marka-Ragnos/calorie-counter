import React from "react";
import { ResultData } from "../../../mock";
import ResultItem from "./result-item";

const ResultList: React.FC = () => {
  return (
    <ul className="counter__result-list">
      {ResultData.map((result, idx) => (
        <ResultItem
          key={result.title + idx}
          title={result.title}
          text={result.text}
        />
      ))}
    </ul>
  );
};

export default ResultList;
