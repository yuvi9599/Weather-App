import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/1130625459/photo/woman-closes-her-nose-with-hand-because-of-bad-traffic-pollution.webp?a=1&b=1&s=612x612&w=0&k=20&c=yrudNHZjG58swfAMAo3Jn9uPxiQT94fB0QECoRmHpkU="
    


    return(
        <div className="infoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;c</p>
          <p>Humidity={info.humidity}</p>
          <p>Min temp={info.tempMin}&deg;c</p>
          <p>Max temp={info.tempMax}&deg;c</p>
          <p>The weather can be described as <i>{info.weather}</i> and  feels like={info.feelsLike}&deg;c</p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    );
}