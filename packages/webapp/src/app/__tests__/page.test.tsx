import {render} from '@testing-library/react'
import Home from '../page'

test('test', () => {
  const {container} = render(<Home />)
  expect(container).toMatchSnapshot();
});
