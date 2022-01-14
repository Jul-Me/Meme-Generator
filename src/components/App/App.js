import { useEffect, useReducer } from 'react';
import Header from '../Header/Header';
import Memes from '../Memes/Memes';
import './App.css';

function reducer(state, action) {
  const randomIndex1 = Math.floor(Math.random() * 100);
  const randomIndex2 = Math.floor(Math.random() * 100);
  const randomIndex3 = Math.floor(Math.random() * 100);

  switch (action.type) {
    case 'getAllMemes':
      return {
        ...state,
        allMemes: [...state.allMemes, ...action.payload],
        displayMemes: [
          action.payload[randomIndex1],
          action.payload[randomIndex2],
          action.payload[randomIndex3],
        ],
      };
    case 'getDisplayMemes':
      return {
        ...state,
        displayMemes: [
          state.allMemes[randomIndex1],
          state.allMemes[randomIndex2],
          state.allMemes[randomIndex3],
        ],
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    allMemes: [],
    displayMemes: [],
  });

  const fetchData = () => {
    return fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: 'getAllMemes', payload: data.data.memes })
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />

      {state.displayMemes.length > 0 && <Memes memes={state.displayMemes} />}

      <button
        onClick={() => dispatch({ type: 'getDisplayMemes' })}
        className="button"
      >
        Generate Memes
      </button>
    </div>
  );
}

export default App;
