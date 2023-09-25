import { useNavigate } from "react-router-dom";

const Instructions = () => {
    const navigate = useNavigate();
    return (
        <>
        <h2 style={{ margin:"1rem 5rem", textTransform:"uppercase" }}>Quizz Instructions</h2>
        <ol style={{ margin:" 0 3.5rem" , fontWeight:"10px"}}>
            <li>The test contains 40 questions and there is no time limit.   
            </li>
            <li>You will get 1 point for each correct answer.</li>
            <li>Every questions has four options</li>
            <li>At the end of the Quiz, your total score will be displayed. </li>
            <li>Maximum score is 10 points.</li>
        </ol>
        <button onClick={() => navigate("/quizzlist")}  className="start-quizz"  style={{ margin:" 1.5rem 4rem" }}>Start-Quizz</button>
        </>
    )
}

export default Instructions;