import { render } from '@testing-library/react'

import Navbar from '../Navbar'

describe('Navbar', () => {
  it('should render with app name and avatar', () => {
    const root = render(<Navbar />)
    expect(root).toMatchSnapshot()
  })
})
