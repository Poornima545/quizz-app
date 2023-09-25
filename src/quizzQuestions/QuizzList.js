import { useNavigate } from "react-router-dom";

const QuizzList = () => {
  const navigate = useNavigate();
  return (
    <div className="quizz-list">
      <h1 style={{ margin:"1rem 5rem", textTransform:"uppercase" }}> Quizz List</h1>
      <ul style={{ margin:"1rem 5rem", textTransform:"uppercase" }}>
        <li>HTML Quizz</li>
        <li>CSS Quizz</li>
        <li>JAVASCRIPT Quizz</li>
        <li>REACT Quizz</li>
      </ul>
      <button className="start-quizz" onClick={() => navigate("/instructions")} style={{marginRight: "9rem", paddingLeft:"4rem"}}>Previous</button>
      <button className="start-quizz">Next</button>
    </div>
  );
};

export default QuizzList;
