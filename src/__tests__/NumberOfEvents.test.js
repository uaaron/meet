import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import EventList from '../components/EventList';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('renders NumberOfEvents input', () => {
    const eventsNumberTextbox = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventsNumberTextbox).toBeInTheDocument();
  });

  test('default number of events is 32', () => {
    const eventsNumberTextbox = NumberOfEventsComponent.queryByRole('textbox');
    NumberOfEventsComponent.rerender(<NumberOfEvents
      setCurrentNOE={() => { }}
    />)
    expect(eventsNumberTextbox.value).toBe('32');
  });

  test('value of textbox changes with user input', async () => {
    const user = userEvent.setup();
    const eventsNumberTextbox = NumberOfEventsComponent.queryByRole('textbox');
    NumberOfEventsComponent.rerender(<NumberOfEvents
      setCurrentNOE={() => { }}
    />);
    await user.type(eventsNumberTextbox, '{backspace}{backspace}10');
    expect(eventsNumberTextbox.value).toBe('10')
  });
})

describe('<NumberOfEvents /> integration', () => {
  test('number of events displayed is changed with user input', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const eventsNumberDOM = AppDOM.querySelector('#number-of-events');
    const eventsNumberTextbox = within(eventsNumberDOM).queryByRole('textbox');

    const EventListDOM = AppDOM.querySelector('#event-list');

    await user.type(eventsNumberTextbox, '{backspace}{backspace}12');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(12);
    });
  })
})