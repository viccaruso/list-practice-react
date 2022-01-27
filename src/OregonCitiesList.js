import React from 'react';
import OregonCity from './OregonCity';

export default function OregonCitiesList({ cities }) {
  return (
    <div>
      { cities.map((city, i) => <OregonCity key={city.name + i} name={city.name} population={city.population} size={city.size} />) }
    </div>
  );
}
