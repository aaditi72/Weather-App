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


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
