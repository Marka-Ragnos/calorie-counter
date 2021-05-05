import React from "react";
import { CSSTransition } from "react-transition-group";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Form from "../form";
import Result from "../result";

const App: React.FC = () => {
  const { visibleBlock } = useTypedSelector((state) => state.RESULT);

  return (
    <main className="main">
      <div className="container">
        <article className="counter">
          <h1 className="counter__heading heading-main">Счётчик калорий</h1>
          <Form />
          <CSSTransition
            in={visibleBlock}
            timeout={1}
            classNames="counter__result"
            mountOnEnter
            unmountOnExit
          >
            <Result />
          </CSSTransition>
        </article>
      </div>
    </main>
  );
};

export default App;
