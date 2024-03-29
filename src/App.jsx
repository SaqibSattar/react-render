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
import { ParentTwo } from "./components/Optimization/ParentTwo.jsx";
import { ParentThree } from "./components/Incorrect Optimizations/ParentThree.jsx";
import { ParentFour } from './components/Incorrect Optimizations/ParentFour.jsx'
import { ContextParent } from './components/Context/ContextParent.jsx'
import { ChildA } from "./components/Context/ContextChildren.jsx";

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
      </ParentOne>
      <GrandParent />
      <ParentTwo /> 
      <ParentThree />
      <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </>
  );
}

export default App;
