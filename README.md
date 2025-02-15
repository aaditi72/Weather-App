# Weather App

## Overview
The **Weather App** is a React-based web application that provides real-time weather information for any location worldwide. Users can search for a city to view key weather metrics, including temperature, humidity, wind speed, and overall conditions.

## Features
- Search for weather details of any city globally
- Displays temperature, humidity, wind speed, and weather conditions
- User-friendly and responsive interface
- Real-time data retrieval using an external API

## Technologies Used
- **React.js** - Frontend framework for building the user interface
- **CSS** - Styling the application
- **OpenWeather API** - Fetching real-time weather data

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/aaditi72/Weather-App.git
   cd Weather-App
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Obtain an API Key**
   - Register at [OpenWeather](https://openweathermap.org/) to obtain an API key.
   - Create a `.env` file in the project root and add the following line:
     ```sh
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the Application**
   ```sh
   npm start
   ```
   The application will be accessible at `http://localhost:3000/`

## Future Enhancements
- Integrate geolocation to fetch weather data for the user's current location
- Display a 7-day weather forecast
- Implement light and dark mode for an improved user experience

## Contribution Guidelines
Contributions are welcome! If you would like to improve the application, feel free to submit a pull request or report issues.

## License
This project is licensed under the **MIT License**.

