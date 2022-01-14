import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './App.css';

function App() {
  const [memes, setMemes] = useState([]);

  const fetchData = () => {
    return fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(`state`, memes);
  }, [memes]);

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
