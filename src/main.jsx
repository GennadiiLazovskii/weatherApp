import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/assets/styles/global.scss'
import WeatherScrean from './components/screan/weatherScrean/weatherScrean'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherScrean/>
  </React.StrictMode>,
)