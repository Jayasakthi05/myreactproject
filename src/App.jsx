
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <div className="student-sec">
        <h2>WELCOME</h2>
      <div className="student-card">
        <Card 
        name=" Priya"
        dept=" CSE"
        year=" 3rd year"
        />

        <Card 
        name=" Janani"
        dept=" IT"
        year=" 3rd year"
        />

        <Card
        name=" Sakthi"
        dept=" Aids"
        year=" 3rd year"
        />
        </div>
      </div>

    </div>
  );
}

export default App;
