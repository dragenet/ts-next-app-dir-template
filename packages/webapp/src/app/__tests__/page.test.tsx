import { describe } from 'node:test'

import renderTestWithProviders from '@/utils/test/renderTestWithProviders'

import Home from '../page'

describe('Home page', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTestWithProviders(<Home />)
    expect(container).toMatchSnapshot()
  })
})
