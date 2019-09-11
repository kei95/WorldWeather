class WeatherModel {
    
    constructor(country, city, humidity, currentTem, tempMax, tempMin, description, time){
        this.country = country;
        this.city = city;
        this.currentTem = currentTem;
        this.tempMax = tempMax;
        this.tempMin = tempMin
        this.humidity = humidity;
        this.description = description;
        this.time = time;
    }
}

export default WeatherModel