import axios from 'axios';

const WeatherService = {
    async getAll() {
        const response= await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=4d65ea1715614fb13078bd539ecf949d&units=metric');
        return response.data;
    }
}

export default WeatherService;