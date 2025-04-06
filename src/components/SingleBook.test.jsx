import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SingleBook from './SingleBook';

// Wrapper per gestire lo state di selezione
const SingleBookWrapper = ({ book }) => {
  const [selected, setSelected] = useState(false);
  return (
    <SingleBook
      book={book}
      isSelected={selected}
      onSelect={() => setSelected(true)}
    />
  );
};

describe('SingleBook component', () => {
  it('cambia il bordo quando viene cliccato', async () => {
    const fakeBook = { asin: '1', title: 'Test Book', img: 'test.jpg' };

    render(
      <MemoryRouter>
        <SingleBookWrapper book={fakeBook} />
      </MemoryRouter>
    );

    // Seleziona l'elemento Card tramite l'immagine, poi risale al contenitore della Card
    const imgElement = screen.getByAltText('Test Book');
    const cardElement = imgElement.closest('.card');
    
    // Controlla il bordo iniziale (non selezionato)
    expect(cardElement).toHaveStyle({ border: '1px solid lightgray' });

    // Simula il click sul card
    await userEvent.click(cardElement);
    
    // Dopo il click, il bordo deve diventare "3px solid red"
    expect(cardElement).toHaveStyle({ border: '3px solid red' });
  });
});
