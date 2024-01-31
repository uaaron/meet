import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  })

  test('renders NumberOfEvents input', () => {
    const eventsNumberTextbox = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventsNumberTextbox).toBeInTheDocument();
  })

  test('default number of events is 32', () => {
    const eventsNumberTextbox = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventsNumberTextbox.value).toBe('32');
  })

  test('value of textbox changes with user input', async () => {
    const user = userEvent.setup();
    const eventsNumberTextbox = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(eventsNumberTextbox, '{backspace}{backspace}10');
    expect(eventsNumberTextbox.value).toBe('10')
  })
})