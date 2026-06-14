/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import HomePage from '../src/pages/HomePage'

describe('HomePage', () => {
  it('renders Nav and main image', () => {
    render(<HomePage />)
    const img = screen.getByAltText(/bialy lotos ciechanow main picture/i)
    expect(img).toBeInTheDocument()
  })
})
