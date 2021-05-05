import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ResultData } from "../../../mock";
import ResultItem from "./result-item";

const ResultList: React.FC = () => {
  const results = useTypedSelector((state) => state.RESULT);

  return (
    <ul className="counter__result-list">
      {ResultData.map((result, idx) => (
        <ResultItem
          key={result.title + idx}
          title={result.title}
          text={result.text}
          calories={results[result.title]}
        />
      ))}
    </ul>
  );
};

export default ResultList;
