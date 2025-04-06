import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' 
import AllTheBooks from './AllTheBooks'

describe('AllTheBooks component', () => {
  it('renderizza tante card quante sono i libri', () => {
    const fakeBooks = [
      { asin: '1', title: 'Book 1' },
      { asin: '2', title: 'Book 2' },
    ]

    render(
      <MemoryRouter>
        <AllTheBooks
          searchQuery="" 
          selectedAsin={null}
          setSelectedAsin={() => {}}
        />
      </MemoryRouter>
    )

  })
})
