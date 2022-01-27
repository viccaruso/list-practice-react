import React from 'react';
import PolarItem from './PolarItem';

export default function PolarList({ flavors }) {
  return (
    <div className='polar-flavor-list'>
      { flavors.map((flavor, i) => <PolarItem key={flavor + i} flavor={flavor} />) }
    </div>
  );
}
