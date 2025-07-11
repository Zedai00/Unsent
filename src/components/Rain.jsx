import '../styles/Rain.css';

function Rain() {
  return (

    <div className="rain">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="drop"
          style={{ '--i': i }}
        />
      ))}
    </div>
  );
}

export default Rain;

