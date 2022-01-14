import React from 'react';
import './Memes.css';

function Memes({ memes }) {
  return (
    <div className="memes">
      {memes.map((meme, idx) => (
        <div
          key={meme.id + idx}
          className="image"
          style={{ backgroundImage: `url(${meme.url})` }}
        ></div>
      ))}
    </div>
  );
}

export default Memes;
