import { useEffect, useState, useReducer } from 'react';
import Header from '../Header/Header';
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

  useEffect(() => {
    console.log(`state`, state.allMemes);
  }, [state.allMemes]);

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
