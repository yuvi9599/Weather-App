import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    let[error, setError]=useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d0c682c935a47b963ad4aa7af0e4ea80";

    let getWeather = async () => {

        try{
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
    
            let data = await response.json();
           
            let result ={
                city: city,
                temp:data.main.temp,
                tempMin:data.main.temp_min,
                tempMax:data.main.temp_max,
    
                humidity:data.main.humidity,
                feelsLike:data.main.feels_like,
                weather:data.weather[0].description,
    
    
    
            }
            console.log(result);
            return result;
        }

        catch(err){
            throw err;
        }
        
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {

        try{
            event.preventDefault();
            console.log(city);
            setCity("");

            let newInfo = await getWeather();
            updateInfo(newInfo);
        }catch(err){
            setError("No such place in our API");
        }

        
    };

    return (
        <div className="search-box">

            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                />

                <br /> <br />

                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:'red'}}>No Such Place Exists</p> }
            </form>
        </div>
    );
}