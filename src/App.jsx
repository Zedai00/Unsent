import { useState, useEffect, useRef } from 'react';
import './App.css';
import Board from './components/Board.jsx';
import fetchImages from './utils/fetchImages.jsx';
import Rain from './components/Rain.jsx';

function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState(new Set());

  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };
    window.addEventListener('click', playAudio);
    return () => window.removeEventListener('click', playAudio);
  }, []);

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchImages();
        setImages(shuffle(data));
      } catch (err) {
        console.error('Failed to load images: ', err);
      }
    };
    loadImages();
  }, []);

  const handleCardClick = (id) => {
    if (clicked.has(id)) {
      setBestScore(Math.max(bestScore, score));
      setScore(0);
      setClicked(new Set());
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClicked(new Set(clicked).add(id));
    }
    setImages(shuffle(images));
  };

  return (
    <div className="app">
      <audio ref={audioRef} loop>
        <source src="/audio/rain.mp3" type="audio/mpeg" />
      </audio>
      <Rain />
      <h1>Unsent</h1>
      <p>Score: {score} | Best: {bestScore}</p>
      <Board images={images} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
