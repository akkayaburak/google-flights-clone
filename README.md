# Google Flights Clone

This project is a simple flight search application that allows users to search for flights between selected airports. The app lists flights based on user inputs for departure/arrival airports and date, providing flight details including the price.

## Features

- **Airport Search:** Users can search for departure and arrival airports.
- **Flight Search:** Users can view available flights based on the selected airports and date.
- **Price Information:** The flight prices are displayed in the search results.
- **Date Picker:** Users can select the desired departure date for the search.

## Technologies

- **React:** Used for building UI components.
- **Material UI:** For designing the UI components.
- **TypeScript:** To provide type safety and better developer experience.
- **AdapterDateFns and DatePicker:** Used for the date selection UI.
- **Axios:** Used for making API requests.
- **Autocomplete:** Used for airport selection and search.

## Getting Started

This project is developed using React and TypeScript. You can follow these steps to run it locally on your machine.

### Prerequisites

Make sure you have the following software installed:

- Node.js (v14 or higher)
- npm or yarn (package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/akkayaburak/google-flights-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd google-flights-clone
   ```

3. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

4. Start the project:

   Using npm:

   ```bash
   npm start
   ```

   Using yarn:

   ```bash
   yarn start
   ```

You can now visit the app in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Airport Search:**

   - Users can select airports for departure and arrival by typing in the respective fields ("From Airport" and "To Airport").
   - The search is triggered once at least 2 characters are typed in the input fields.
   - The results are fetched from the API and displayed for user selection.

2. **Flight Search:**

   - After selecting the departure date and airports, users can click the "Search" button to search for available flights.
   - The flights will be filtered based on the selected airports and date.

3. **Flight Details:**
   - The flight details, such as departure/arrival times and prices are shown for each flight.

## Code Overview

### `Home` Component

The `Home` component is responsible for managing the flight search form, airport data, and flight results. It contains the following main states:

- **flights**: Holds the list of flights returned from the API.
- **loading**: Tracks the loading state when making API calls.
- **airportData**: Stores airport data for both departure and arrival.
- **fromAirport** and **toAirport**: Keep the selected airports for flight search.

#### Key Functions:

- **fetchAirportData**: Fetches a list of airports and stores them in the `airportData` state.
- **handleSearch**: Handles the flight search logic by making an API call with selected airport and date details.

### `SearchForm` Component

The `SearchForm` component handles the user inputs for airport selection, date, and search submission.

#### Key Features:

- **Autocomplete for Airports**: The airports are searched dynamically as the user types in the input fields.
- **Date Picker**: Allows the user to pick a date for the flight search.
- **Search Button**: Triggers the flight search when clicked.
