import { useState } from "react";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import ObjectUseState from "./components/Immutable State/ObjectUseState";
import ArrayUseState from "./components/Immutable State/ArrayUseState";
import { Parent } from './components/Parent Child/Parent.jsx'

function App() {
  return (
    <>
      {/* <UseState /> 
      <UseReducer />
      <ObjectUseState />
      <ArrayUseState /> */}
      <Parent />
    </>
  );
}

export default App;
