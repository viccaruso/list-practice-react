import React from 'react';

export default function OregonCity({ name, population, size }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{`Population: ${population}`}</p>
      <p>{`Size: ${size}`}</p>
    </div>
  );
}
