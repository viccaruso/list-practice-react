import React from 'react';

export default function Book({ isbn, title, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{`${author.firstName} ${author.middleName} ${author.lastName}`}</h3>
      <p>{isbn}</p>
    </div>
  );
}