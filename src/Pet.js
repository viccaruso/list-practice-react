import React from 'react';

export default function Pet({ name, type, favoriteToys, color }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{type}</h3>
      <p>{color}</p>
      <p>{favoriteToys}</p>
    </div>
  );
}
