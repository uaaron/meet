Feature: Toggle Event Details
  Scenario: An event element is collapsed by default.
    Given the user has opened the app
    When the app displays a list of events
    Then the event details are hidden by default

  Scenario: User can expand an event to see its details.
    Given user is viewing an event
    When user clicks on the show details button
    Then the details section of the event will expand

  Scenario: User can collapse an event ot hide detials.
    Given user has expanded the details section of an event item
    When the user clicks on hide details
    Then the details section of the event will collapse