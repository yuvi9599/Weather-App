import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from 'react';
export default function weatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        weather:"haze",
        humidity:47,


    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Yuvraj</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

    );
}