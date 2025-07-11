import "../styles/Card.css";

function Card({ id, url, handleClick }) {

  const onClick = () => {
    handleClick(id);
  };

  return (
    <div className="card" onClick={onClick}>
      <img src={url} alt={`card-${id}`} />
    </div>
  );

}

export default Card;
