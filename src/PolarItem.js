import React from 'react';

export default function PolarItem({ flavor, color }) {
  return (
    <div className={`polar-flavor ${color}`}>
      <span>{flavor}</span>
    </div>
  );
}