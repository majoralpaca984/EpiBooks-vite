import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Avvio dell\'app', () => {
  it('non mostra alcun componente SingleComment all\'inizio', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
 // Verifica che non ci sia alcun elemento con data-testid "single-comment"
    expect(screen.queryByTestId('single-comment')).toBeNull();
  });
});
