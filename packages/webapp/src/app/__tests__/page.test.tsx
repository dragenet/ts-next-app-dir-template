import Home from '../page';
import renderTestWithProviders from '@/utils/test/renderWithProviders';

test('test', () => {
  const { container } = renderTestWithProviders(<Home />);
  expect(container).toMatchSnapshot();
});
