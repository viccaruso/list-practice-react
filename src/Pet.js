import React from 'react';

export default function Pet({ name, type, favoriteToys, color }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{type}</h3>
      <p>{color}</p>
      {
        favoriteToys.map((toy, i) => <p key={toy + i}>{toy}</p>)
      }
    </div>
  );
}
