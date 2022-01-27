import React from 'react';
import Book from './Book';

export default function BooksList({ books }) {
  return (
    <div>
      { books.map((book, i) => <Book key={book.title + i} title={book.title} author={book.author} isbn={book.ISBN} />) }
    </div>
  );
}
