import { loadFeature, defineFeature } from 'jest-cucumber'
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { getEvents } from '../api';
import App from '../App';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the user has opened the app', () => {
      AppComponent = render(<App />);
    });

    when('the app displays a list of events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      })
    });

    then('the event details are hidden by default', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('user is viewing an event', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
    });

    when('user clicks on the show details button', async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByText('Show Details');
      await user.click(showDetails);
    });

    then('the details section of the event will expand', () => {
      expect(EventComponent.container.querySelector('#details')).toBeInTheDocument();
    });
  });

  test('User can collapse an event ot hide detials.', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('user has expanded the details section of an event item', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      await user.click(EventComponent.queryByText('Show Details'));
      expect(EventComponent.container.querySelector('#details')).toBeInTheDocument();
    });

    when('the user clicks on hide details', async () => {
      const hideDetails = EventComponent.queryByText('Hide Details');
      const user = userEvent.setup();
      await user.click(hideDetails);
    });

    then('the details section of the event will collapse', () => {
      expect(EventComponent.container.querySelector('#details')).not.toBeInTheDocument();
    });
  });
})