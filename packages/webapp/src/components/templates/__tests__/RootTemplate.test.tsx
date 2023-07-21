import { render } from '@testing-library/react'
import RootLayout from '../RootTemplate'

describe('RootTemplate', () => {
  it('should render with content', () => {
    const { container } = render(
      <RootLayout>
        <div data-testname="content" />
      </RootLayout>
    )
    expect(container).toMatchSnapshot()
  })
})
