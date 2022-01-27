import React from 'react';

export default function PolarItem({ flavor }) {
  return (
    <div className={`polar-flavor ${flavor}`}>
      <p>{flavor}</p>
    </div>
  );
}