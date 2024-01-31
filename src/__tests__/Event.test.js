import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents, extractLocations } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event title', async () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event time', async () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.container.querySelector('#show-details')).toBeInTheDocument();
  });

  test('the event details are hidden by default', () => {
    expect(EventComponent.container.querySelector('#details')).not.toBeInTheDocument();
  })

  test('shows details section when user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    const showDetails = EventComponent.container.querySelector('#show-details');
    await user.click(showDetails);
    expect(EventComponent.container.querySelector('#details')).toBeInTheDocument();
  })

  test('hide details section when user clicks on the "hide details" section', async () => {
    const user = userEvent.setup();
    const hideDetails = EventComponent.container.querySelector('#hide-details');
    await user.click(hideDetails);
    expect(EventComponent.container.querySelector('#details')).not.toBeInTheDocument;
  })

});