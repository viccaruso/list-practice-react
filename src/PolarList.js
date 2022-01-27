import React from 'react';
import PolarItem from './PolarItem';

export default function PolarList({ flavors }) {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  
  return (
    <div className='polar-flavor-list'>
      { flavors.map((flavor, i) => <PolarItem key={flavor + i} flavor={flavor} color={colors[i % colors.length]}/>) }
    </div>
  );
}
