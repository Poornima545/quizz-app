import Card from "./Card";
import { Data } from "./Data";

const Cards = () => {
  return (
    <>
      <div className="Cards-list">
        <h1>List of Quizz</h1>
        {Data.map((item, index) => (
          <Card key={index} Data={item} />
        ))}
      </div>
    </>
  );
};

export default Cards;
