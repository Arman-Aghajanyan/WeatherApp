import React, { useState } from "react";
import "./App.css";
const api = {
    key: "dfed594083a37fc8bbf2fb2553946e76",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
};

function ApiWeather () {
    const [search, setSearch] = useState("");


    const handleSearchButton = () => {
        fetch(`${api.baseUrl}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return(
        <div>
            <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
            <button onClick={handleSearchButton}>Search</button>
            </div>
            <div></div>
        </div>
    )
}

export default ApiWeather;