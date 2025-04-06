import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Welcome from './Welcome' 

describe('Welcome component', () => {
  it('dovrebbe montarsi correttamente', () => {
    render(<Welcome />)
    expect(screen.getByText(/benvenuto/i)).toBeInTheDocument()
  })
})
