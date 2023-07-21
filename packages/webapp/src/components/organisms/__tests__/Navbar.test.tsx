import Navbar from '@/components/organisms/Navbar'
import { render } from '@testing-library/react'

describe('Navbar', () => {
  it('should render with app name and avatar', () => {
    const root = render(<Navbar />)
    expect(root).toMatchSnapshot()
  })
})
