import Avatar from '@/components/atoms/Avatar'
import { render } from '@testing-library/react'

describe('Avatar', () => {
  it('render with content', () => {
    const root = render(<Avatar />)
    expect(root).toMatchSnapshot()
  })
})
