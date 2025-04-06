// CommentArea.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CommentArea from './CommentArea'

describe('CommentArea component', () => {
  it('mostra un messaggio se nessun libro è selezionato', () => {
    render(<CommentArea asin={null} />)
    
    expect(
      screen.getByText(/seleziona un libro per vedere i commenti/i)
    ).toBeInTheDocument()
  })
})
