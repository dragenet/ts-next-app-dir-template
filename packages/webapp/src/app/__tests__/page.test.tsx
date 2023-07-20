import Home from '../page'
import renderTestWithProviders from '@/utils/test/renderTestWithProviders'

test('test', () => {
  const { container } = renderTestWithProviders(<Home />)
  expect(container).toMatchSnapshot()
})
