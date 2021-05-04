import React from "react";
import ResultList from "./result-list";

const Result: React.FC = () => {
  return (
    <section className="counter__result">
      <h2 className="heading">Ваша норма калорий</h2>
      <ResultList />
    </section>
  );
};

export default Result;
