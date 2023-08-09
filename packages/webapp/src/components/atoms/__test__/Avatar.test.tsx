import { render } from '@testing-library/react'

import Avatar from '../Avatar'

describe('Avatar', () => {
  it('render with content', () => {
    const root = render(<Avatar />)
    expect(root).toMatchSnapshot()
  })
})
