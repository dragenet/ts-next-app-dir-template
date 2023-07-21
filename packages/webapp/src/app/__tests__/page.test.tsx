import { describe } from 'node:test'
import Home from '../page'
import renderTestWithProviders from '@/utils/test/renderTestWithProviders'

describe('Home page', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTestWithProviders(<Home />)
    expect(container).toMatchSnapshot()
  })
})
