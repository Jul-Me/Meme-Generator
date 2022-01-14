import { useEffect, useState, useReducer } from 'react';
import Header from '../Header/Header';
import Memes from '../Memes/Memes';
import './App.css';

const initialState = { allMemes: [], displayMemes: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'getAllMemes':
      return {
        ...state,
        allMemes: [...state.allMemes, ...action.payload],
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <Memes memes={state.allMemes} />
    </div>
  );
}

export default App;
