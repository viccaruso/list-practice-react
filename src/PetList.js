import React from 'react';
import Pet from './Pet';

export default function PetList({ pets }) {
  return (
    <div>
      { pets.map((pet, i) => <Pet key={pet.name + i} name={pet.name} type={pet.type} favoriteToys={pet.favoriteToys} color={pet.color} />) }
    </div>
  );
}
