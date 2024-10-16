import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./ToDo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ['sakib', ' josim', ' raj', ' rubel', ' Jihan']

  const singers = [
    {id: 1 , name : 'dr Mahfuzur ' , age : 55},
    {id: 2 , name : 'Dada' , age : 51},
    {id: 3, name : 'pritom' , age : 34}
  ]

const books = [
  {id : 1 , name : 'physics', price : 100},
  {id : 2 , name : 'Chemistry', price : 1100},
  {id : 3 , name : 'Biology ', price : 11100},
  {id : 4 , name : 'Math', price : 111100},
]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name=" Mosabbir"></Actor>
      {
        actors.map(actor => <Actor name={ actor}></Actor>)
      }

      {/* <Todo 
       task="learn react"
       isDone={true}></Todo>
      <Todo 
       task="Explore core concepts" 
       isDone={false}></Todo>
      <Todo task="Try jsx" 
       isDone={true}></Todo> */}
       
      {/* <Person></Person>
     <Device name="laptop" price="55000"></Device>
     <Device name="mobile" price="22000"></Device>
     <Student grade="7" score="99"></Student>
     <Student grade={12} score="45"></Student>
     <Student ></Student>
     <Developer></Developer> */}
    </>
  );
}

function Person() {
  const age = 22;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am a {person.name} with age {person.age} have {money + age} tk{" "}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "99" };
function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>Grade : {grade} </h3>
      <p>score : {score} </p>
    </div>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h3>
      This Device : {props.name} and price : {props.price}{" "}
    </h3>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h3>Developer</h3>
      <p>coding : </p>
    </div>
  );
}

export default App;
