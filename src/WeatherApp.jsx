import Searchbox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Siliguri",
        feels_like:  26.05,
        humidity:  34,
        temp:  26.05,
        temp_max:  37.05,
        temp_min:  20.05,
        weather:  "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign : "center"}}>
        <h1>
        Weather
        </h1>
        <Searchbox updateInfo = {updateInfo}/>
        <InfoBox  info= {weatherInfo}/>
        </div>
    )
};