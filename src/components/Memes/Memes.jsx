import React from 'react';

function Memes({ memes }) {
  console.log(`state`, memes);
  return (
    <div className="memes">
      {memes.map((meme) => (
        <img
          key={meme.id}
          src={meme.url}
          alt={meme.name}
          height={meme.height}
          width={meme.width}
        />
      ))}
    </div>
  );
}

export default Memes;
