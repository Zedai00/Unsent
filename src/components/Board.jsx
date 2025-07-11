import "../styles/Board.css";
import Card from "./Card.jsx";

function Board({ images, onCardClick }) {
  return (
    <div className="board">
      {images.map((img) => (
        <Card
          key={img.id}
          id={img.id}
          url={img.url}
          handleClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default Board;
