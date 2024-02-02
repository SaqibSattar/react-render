import { useState } from "react";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import ObjectUseState from "./components/Immutable State/ObjectUseState";
import ArrayUseState from "./components/Immutable State/ArrayUseState";
import { Parent } from './components/Parent Child/Parent.jsx'
import { ParentOne } from "./components/Optimization/ParentOne.jsx";
import { ChildOne } from "./components/Optimization/ChildOne.jsx";
import { GrandParent } from "./components/Optimization/GrandParent.jsx";

function App() {
  return (
    <>
      {/* <UseState /> 
      <UseReducer />
      <ObjectUseState />
      <ArrayUseState />
      <Parent /> 
      <ParentOne>
        <ChildOne />
      </ParentOne> */}
      <GrandParent />
    </>
  );
}

export default App;
