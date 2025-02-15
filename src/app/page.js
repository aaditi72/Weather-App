"use client";

import { useState, useEffect } from "react";
import './interactive.css';

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherImage, setWeatherImage] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weather) {
      const condition = weather.weather[0].main;
      const getBackgroundImage = (condition) => {
        switch (condition) {
          case "Clear":
            return "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          case "Clouds":
            return "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          case "Rain":
            return "https://images.pexels.com/photos/459439/pexels-photo-459439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          case "Snow":
            return "https://images.pexels.com/photos/714482/pexels-photo-714482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          default:
            return "https://images.unsplash.com/photo-1517574150334-6d3578f2cc5a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        }
      };

      const backgroundImage = getBackgroundImage(weather.weather[0].main);
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
    }
  }, [weather]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-cover bg-center">
      <h1 className="text-6xl font-bold mb-6 text-white">Weather App</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded-md px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={fetchWeather} className="button">
          Get Weather
        </button>
      </div>

      {loading && (
        <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-10 h-10 mb-4"></div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
