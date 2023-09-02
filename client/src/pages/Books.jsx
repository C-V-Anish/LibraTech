import React from 'react';
import Typography from '@mui/material/Typography';
import CustomCard from '../components/Card';
import bookData from '../book_data.json';

function Books() {
  const booksByGenre = {};

  bookData.forEach((book) => {
    if (!booksByGenre[book.genre]) {
      booksByGenre[book.genre] = [];
    }
    booksByGenre[book.genre].push(book);
  });

  return (
    <div>
      {Object.keys(booksByGenre).map((genre) => (
        <div key={genre}>
          <Typography variant="h5" component="div" style={{ marginTop: '16px' }}>
            {genre}
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {booksByGenre[genre].map((book) => (
              <CustomCard
                key={book.title}
                title={book.title}
                imageUrl={book.imageUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
