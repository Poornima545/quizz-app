// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const { title, text } = props.Data;
  return (
    <div className="card-list">
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={() => navigate} className="start-quizz">
        Start Quizz
      </button>
    </div>
  );
};

export default Card;
