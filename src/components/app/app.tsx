import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Form from "../form";
import Result from "../result";

const App: React.FC = () => {
  const {visibleBlock} = useTypedSelector((state) => state.RESULT);

  return (
    <main className="main">
      <div className="container">
        <article className="counter">
          <h1 className="counter__heading heading-main">Счётчик калорий</h1>
          <Form />
          {visibleBlock ? <Result /> : null}
        </article>
      </div>
    </main>
  );
};

export default App;
