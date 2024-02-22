import { loadFeature, defineFeature } from 'jest-cucumber'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user has opened the app', () => {

    });

    when('the user searches for an event', () => {

    });

    then('the details section of that event will be collapsed', () => {

    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('user has selected an event', () => {

    });

    when('user clicks on the show details button', () => {

    });

    then('the details section of the event will expand', () => {

    });
  });

  test('User can collapse an event ot hide detials.', ({ given, when, then }) => {
    given('user has expanded the details section of an event item', () => {

    });

    when('the user clicks on hide details', () => {

    });

    then('the details section of the event will collapse', () => {

    });
  });
})