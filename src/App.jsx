import { useState } from "react";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import ObjectUseState from "./components/ObjectUseState/ObjectUseState";
import ArrayUseState from "./components/ObjectUseState/ArrayUseState";

function App() {
  return (
    <>
      {/* <UseState /> 
      <UseReducer />
      <ObjectUseState /> */}
      <ArrayUseState />
    </>
  );
}

export default App;
