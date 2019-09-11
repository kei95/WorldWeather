import React from "react";
import WeatherCard from "./Components/WeatherCard"
import Title from "./Components/Title";
import Form from "./Components/Form";
import WeatherModel from './Components/WeatherModel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_KEY = "17116ccb6b8729ea246236b105e9a474"

class App extends React.Component {

  state = {
    error: undefined,
    isReady: false,
    weathers: [],
    city: ""
  }

  weather = null

  delete = (cityName) => {
      let newWeatherArr = this.state.weathers.filter(item=> item.city !== cityName)
      if (this.state.weathers.length !== 0) {
      this.setState({
        weathers: newWeatherArr,
      })
    } else {
      newWeatherArr = []
      this.setState({
        weathers: newWeatherArr,
      })
    }
  } 

  getWeather = async (e) => {
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},Japan&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      this.setState({
        city: ""
      })
      if(city){
      let newWeather = new WeatherModel(
          data.sys.country,
          data.name, 
          data.main.humidity,
          data.main.temp,
          data.main.temp_max,
          data.main.temp_min, 
          data.weather[0].main,
          data.timezone)
  
          if (!this.state.weathers.some(e => e.city === newWeather.city)){
            let newWeathersArr = [...this.state.weathers, newWeather]
            this.setState({
              error: "",
              isReady: true,
              weathers: newWeathersArr
            })
          } else {
            this.setState({
              error: "You have same city already"
            })
          }
      } else {
        this.setState({
          error: "Please enter the value"
        })
      }
    } catch (error) {
      this.setState({
        error: "This city does not exist. make sure there's no typo"
      })
    } 

  }

  handleChange = (e) => {
    this.setState({
        city: e
    })
}

  renderWeatherCards() {
    let cards = this.state.weathers.map((item, index) => <div key={index}><WeatherCard index={index} delete={this.delete} weather={item}/></div>)
    return cards
  }

  render() {
    return(<div style={{display: 'absolute', width: '100vh', maxWidth: '100vh'}}>
      <Title />
        <Form handleChange={this.handleChange}  city={this.state.city} error={this.state.error} getWeather={this.getWeather} style={{ marginBottom: '6rem' }}/>
        <div className='cardsContainer'>
          <div className='cardsContainer_holizontal'>
            {this.state.isReady && this.renderWeatherCards()}
          </div>
        </div>
    </div>);
  }

}

export default App;
