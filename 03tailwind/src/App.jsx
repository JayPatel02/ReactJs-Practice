import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name:"Jay",
    age:20
  }
  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl mb-5">Tailwind Test</h1>
      <Card userName="Chaiaurcode" />
      <Card userName="Jay Patel"/>
    </>
  );
}

export default App;
