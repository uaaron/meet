# MEET APP

## Objective
  Create a serverless, progressive web application (PWA) using React and test-driven development (TDD) approach. It will also be integrated with Google calendar API to fetch and display upcoming events in selected cities.

## The Five W's
  1. Who: Targeted at Meet app users – including peers, professionals, potential recruiters.
  2. What: A PWA employing serverless architecture and created through TDD.
  3. When: Users of this app will be able to use it whenever they wish, including while offline.
  4. Where: Cloud hosting enables both online and offline functionality.
  5. Why: Using contemporary cloud solutions while at the same time providing the experience that a PWA can provide to users. Also ensuring the app is thoroughly tested through the TDD approach. 

## Meet App user stories, scenarios, and features

### List of features: 
  - Filter Events by City
  - Toggle Event Details
  - Specify Number of Events
  - Be able to use App When Offline
  - Add Home Screen Shortcut Option to App
  - Display Charts Visualizing Event Statistics

FEATURE: Filter Events by City

As a user, I should be able to filter events by city so that I can see a list of events taking place in that city. 
  - Scenario 1: User has opened the app and hasn't searched for a specific city.
    - Given user hasn't searched for any city, when the user opens the app then the user should see a list of upcoming events for all available cities.
  - Scenario 2: User should see a list of suggestions when they search for a city. 
    - Given the main page is open, when user starts typing in the city textbox then the user should receive a list of cities that match what they've typed. 
  - Scenario 3: User can select a city from the suggested list.
    - Given user has typed in a specific city when the user selects the correct city from the populated list then their city should be changed to that city and the user should receive a list of upcoming events in that city.

FEATURE: Toggle Event Details

As a user I should be able to select the 'see more details' button so that I can obtain more information for the event that I am viewing. 
  - Scenario 1: User has an event selected but the more details section is collapsed.
    - Given user has a specific event selected, when they click the 'show more details' button then they will be able to read more about that specific event.
  - Scenario 2: User has expanded the more details section for the event.
    - Given user has the details section expanded on a selected event, when the user clicks on the 'hide details button' then the more details section will collapse. 

FEATURE: Specify Number of Events

As a user I should be able to specify the number of events that shows up per selected city. 
  - Scenario 1: By default the app will be set to show all events in that city. 
    - Given a user has searched for a specific city, when the user clicks on that city then all the events in that city will be displayed. 
  - Scenario 2: The user can specify the number of events to be displayed.
    - Given a user has specified a number of results per city to be displayed, when the user searches a speficic city then that selected number of events will be displayed. 

FEATURE: Be able to Use App When Offline

As a user I should be able to use the app and get information when offline of data that was fetched while previously connected to internet. 
  - Scenario 1: Be able to display cached data when there is no internet connection.
    - Given the user is not connected to the internet, when the user is using the app then cached data stored in the app will be able to be displayed. 
  - Scenario 2: Show error message when the search criteria change.
    - Given the user has no internet connection, when the user searches events for a different city or time then the app will show an error message. 

FEATURE: Add Home Screen Shortcut

As a user I should be able to create a home screen shortcut to the app for quick access.
  - Scenario 1: User can install the app and place a shortcut on their home screen.
    - Given the user installs the app, when the user selects to install app as a shortcut then the shortcut will appear on their home screen.
    
FEATURE: Display Charts Visualizing Event Statistics

As a user I should be able to see charts visualizing the events around the city.
  - Scenario 1: Given user is in the event details page, when a user clicks the button to see a chart visualizing all the events around the city, a map will appear showing where the events are taking place.


### SERVERLESS FUNCTIONS

In Meet App serverless functions will be used to process on demand requests and will also give the app responsivess in regards to scalability. The types of requests will vary from filtering events by city, to specifying the number of events to view. The serverless technology will also be used to generate the charts that will be displayed by the View Charts feature. 
By using serverless functions Meet App will be more flexible and cost-effective. It will also allow Meet App to focus on providing optimal user experience without having to allocate resources managing server infrastructure. 
