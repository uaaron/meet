Feature: Toggle Event Details
  Scenario: An event element is collapsed by default.
    Given the user has opened the app
    When the user searches for an event
    Then the details section of that event will be collapsed

  Scenario: User can expand an event to see its details.
    Given user has selected an event
    When user clicks on the show details button
    Then the details section of the event will expand

  Scenario: User can collapse an event ot hide detials.
    Given user has expanded the details section of an event item
    When the user clicks on hide details
    Then the details section of the event will collapse