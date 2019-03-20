import React from "react";
import { useInput } from "./hooks/useInput";

const App = () => {
  const input = useInput("Hello Qvil!");

  return (
    <>
      <h1>React Lib</h1>
      <p>Library for react. 📚</p>
      <input {...input} />
    </>
  );
};

export default App;
