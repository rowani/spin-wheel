import { useState } from 'react';
import './App.css';
import wheelImage from '../public/wheel.png';

function App() {
  const [rot, setRot] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = async () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const angle = 360 * 5 + Math.floor(Math.random() * 360);
    setRot(prev => prev + angle);

    setTimeout(async () => {
      const res = await fetch(process.env.REACT_APP_API_URL + '/api/spin', { method: 'POST' });
      const data = await res.json();
      setResult(data.prize);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <div className="App text-center text-light bg-dark vh-100 d-flex flex-column justify-content-center">
      <h1>🎰 Spin & Win</h1>
      <div style={{ margin: '2rem auto', width: 300, height: 300 }}>
        <img
          src={wheelImage}
          alt="Wheel"
          style={{
            transform: `rotate(${rot}deg)`,
            transition: 'transform 4s ease-out',
            width: '100%',
            borderRadius: '50%'
          }}
        />
      </div>
      <button className="btn btn-danger btn-lg" onClick={spin}>
        Spin voor €7,50
      </button>
      {result && <div className="alert alert-success mt-4">🎉 Gewonnen: {result}</div>}
    </div>
  );
}

export default App;