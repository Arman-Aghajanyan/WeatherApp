import React, { useState } from "react";
import "./App.css";

const api = {
  key: "dfed594083a37fc8bbf2fb2553946e76",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
    if (search === "") return
    fetch(`${api.baseUrl}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  const handleSubmitSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="app">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={handleSubmitSearch} value={search} />
        <button type="submit">Search</button>
      </form>
      {typeof weather.main !== "undefined" ? (
        <div className="all-weather">
          <h2>
            <img
              src={
                "https://openweathermap.org/img/w/" +
                weather.weather[0].icon +
                ".png"
              }
              alt=""
            />
            <span className="titles">{weather.sys.country}</span> : {" "}
            {weather.name}
          </h2>
          <h4 className="temp">
            <span className="titles">Temp</span> : {weather.main.temp}°C
          </h4>
          <h4 className="feels">
            <span className="titles">Feels Like</span> : {weather.main.feels_like}°C
          </h4>
          <h4 className="weather">
            <span className="titles">Weather</span> : {weather.weather[0].main}
          </h4>
          <h4 className="wind-speed">
            <span className="titles">Wind Speed</span> : {weather.wind.speed}
          </h4>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
