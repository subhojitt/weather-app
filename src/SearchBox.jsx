import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export default function SearchBox({updateInfo}){
let[city, setCity ] = useState("");

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "ff778de9b0164b37d28e6bc1632d7cbc";

let getWeatherInfo = async () => {
    let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`

    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
        city : city,
        temp : jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        weather : jsonResponse.weather[0].description,
        feels_like : jsonResponse.main.feels_like,
    };
    return result;
};

let handleChange = (event) =>{
    setCity(event.target.value);
};

let handleSubmit = async(event) =>{
event.preventDefault();
console.log(city);
setCity("");
 let newInfo = await getWeatherInfo();
 updateInfo(newInfo);
};

    return(
        <div class="flex justify-center items-center py-4">
  <div class="relative w-full max-w-md">
  <form onSubmit={handleSubmit} >
    <input
    required value={city} onChange={handleChange}
      type="text"
      placeholder="Search for weather"
      class="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <button variant="contained" type='submit'
     class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h3m0 0l-3 3m3-3l-3-3m-3 3H9m0 0l3 3m-3-3l3-3" />
      </svg>
    </button>
    </form>
  </div>
</div>

      
    )
}