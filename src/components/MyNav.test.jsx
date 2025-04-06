// MyNav.test.jsx
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MyNav from './MyNav';

const TestWrapper = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />;
};

describe('MyNav component', () => {
  it('aggiorna il valore dell\'input quando l\'utente digita', async () => {
    render(
      <MemoryRouter>
        <TestWrapper />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Cerca un libro per titolo!');
    
    expect(input.value).toBe('');
    
    await userEvent.type(input, 'Test');
    expect(input.value).toBe('Test');
  });
});
