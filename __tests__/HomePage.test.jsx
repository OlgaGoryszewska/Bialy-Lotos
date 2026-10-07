/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import HomePage from '../src/pages/HomePage'

describe('HomePage', () => {
  it('renders the new hero content', () => {
    render(<HomePage />)
    const img = screen.getByAltText(/klientka po zabiegu brwi permanentnych/i)

    expect(
      screen.getByRole('heading', {
        name: /piękno, które podkreśla ciebie/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /umów wizytę/i }).length
    ).toBeGreaterThan(0)
    expect(img).toBeInTheDocument()
  })
})
