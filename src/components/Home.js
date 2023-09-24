import Navbar from "./Navbar";
import Data from "./Data";
import { useState } from "react";


function Home() {
    const Data = (props) => {
        console.log(props);
        const { title, text } = props.Data;
    }
  return (
    <>
    <Navbar/>
    <Data/>
    <h1>List of Quizz</h1>
    <div className="quizz">
    <h1>{title}</h1>
    <p>{text}</p>
    <button>Start Quizz</button>
    </div>
    </>
  )
}

export default Home;
