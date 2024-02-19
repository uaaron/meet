Feature: Filter Events by City

  Scenario: User has opened the app and hasn't searched for a specific city.
    Given user hasn't searched for any city
    When the user opens the app
    Then the user should see a list of upcoming events for all available cities.

  Scenario: User should see a list of suggestions when they search for a city.
    Given the main page is open
    When user starts typing in the city textbox
    Then the user should receive a list of cities that match what they've typed.

  Scenario: User can select a city from the suggested list.
    Given user was typing Berlin in the city textbox
    And the list of suggested cities is showing
    When the user selects the correct city from the populated list
    Then their city should be changed to that city
    And the user should receive a list of upcoming events in that city.