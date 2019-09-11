import React from 'react'
import rain from '../images/rain.jpg'
import cloud from '../images/cloud.jpg'
import sunny from '../images/sunny.jpg'
import snow from '../images/snow.jpg'
import fog from '../images/fog.jpg'
import thunderstorm from '../images/Thunderstorm.jpg'
import './Css/WeatherCard.css'
import { Card, Button } from 'react-bootstrap'

class WeatherCard extends React.Component {
    state = {
        pic: null
    }

    picPicture() {
        switch (this.props.weather.description) {
            case "Clouds":
                return cloud
            case "Clear":
                return sunny
            case "Rain":
                return rain
            case "Snow":
                return snow
            case "Fog":
                return fog
            case "Mist":
                return fog
            case "Thunderstorm":
                return thunderstorm
            case "Haze":
                return fog
            case "Drizzle":
                return fog
            default:
                return sunny
        }
    }

    render() {
        return (
            <div>
                    <Card style={{marginTop: '3vh'}}>
                        <Card.Img className="CardImage" variant="top" src={this.picPicture()} />
                        <Card.Body>
                            <Card.Title>{this.props.weather.city}, {this.props.weather.country}</Card.Title>
                            <Card.Text>
                                Weather:<br />
                                {this.props.weather.description}<br />
                                <br />
                                CurrentTemperture:<br />
                                {this.props.weather.currentTem} ℃<br />
                                <br />
                                MaxTemperture:<br />
                                {this.props.weather.tempMax} ℃<br />
                                <br />
                                MinTemperture:<br />
                                {this.props.weather.tempMin} ℃<br />
                                <br />
                                Humidity:<br />
                                {this.props.weather.humidity} %
                            </Card.Text>
                            <Button onClick={() => this.props.delete(this.props.weather.city)}>Delete</Button>
                        </Card.Body>
                    </Card>
            </div>
        );
    }
}
export default WeatherCard;