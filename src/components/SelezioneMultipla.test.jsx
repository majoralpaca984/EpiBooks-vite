import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SingleBook from './SingleBook';

// Wrapper che gestisce la selezione di un solo libro alla volta
const MultipleBooksWrapper = ({ books }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);
  return (
    <>
      {books.map((book) => (
        <SingleBook
          key={book.asin}
          book={book}
          isSelected={book.asin === selectedAsin}
          onSelect={() => setSelectedAsin(book.asin)}
        />
      ))}
    </>
  );
};

describe('SelezioneMultipla - selezione multipla', () => {
  it('fa tornare normale il bordo del primo libro quando viene selezionato un secondo', async () => {
    const fakeBooks = [
      { asin: '1', title: 'Book 1', img: 'book1.jpg' },
      { asin: '2', title: 'Book 2', img: 'book2.jpg' },
    ];

    render(
      <MemoryRouter>
        <MultipleBooksWrapper books={fakeBooks} />
      </MemoryRouter>
    );

    // Recupera gli elementi Card tramite l'attributo alt dell'immagine
    const book1Img = screen.getByAltText('Book 1');
    const book2Img = screen.getByAltText('Book 2');

    const book1Card = book1Img.closest('.card');
    const book2Card = book2Img.closest('.card');

    // Verifica che inizialmente entrambi i libri abbiano il bordo "normale"
    expect(book1Card).toHaveStyle({ border: '1px solid lightgray' });
    expect(book2Card).toHaveStyle({ border: '1px solid lightgray' });

    // Clicca sul primo libro e verifica che il bordo diventi rosso
    await userEvent.click(book1Card);
    expect(book1Card).toHaveStyle({ border: '3px solid red' });
    expect(book2Card).toHaveStyle({ border: '1px solid lightgray' });

    // Clicca sul secondo libro
    await userEvent.click(book2Card);
    // Ora il secondo libro deve avere il bordo rosso...
    expect(book2Card).toHaveStyle({ border: '3px solid red' });
    // ... e il primo libro deve tornare al bordo normale
    expect(book1Card).toHaveStyle({ border: '1px solid lightgray' });
  });
});
