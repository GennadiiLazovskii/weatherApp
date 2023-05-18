import styles from './weatherScrean.module.scss';
import humidity from '../../img/humidity.png';
import Rain from '../../img/raining.png';
import Res from '../../img/1.png';
import Clear from '../../img/sun.png';
import windPower from '../../img/wind-power.png';
import serchBtn from '../../img/search.png';
import Clouds from '../../img/clouds.png';
import Drizzle from '../../img/drizzle.png';
import Mist from '../../img/haze.png';
import { useEffect, useState } from 'react';
import WetherService from '../../../../../../appTest/vite-project/src/components/service/wether.service';

const WeatherScrean = () => {

    const [weather, setWeather] = useState();
    const [icons, setIcons] = useState();

    // console.log(icons)

    useEffect(() => {
        const fetchData = async () => {
            const response = await WetherService.getAll()
            setWeather(response)
            setIcons(response.weather[0].main)
        }
        fetchData();
    }, [])

    return (
        <div className={styles.wrapper}>
            {weather !== undefined ? (
                <div>
                    <div className={styles.serch}>
                        <input type="text" />
                        <button>
                            <img src={serchBtn} alt="serch" />
                        </button>
                    </div>
                    <div className={styles.images}>
                        {
                            (icons == "Clouds") ? (<img src={Clouds} alt='Clouds'/>) :
                            (icons == "Clear") ? (<img src={Clear} alt='Clear'/>) :
                            (icons == "Rain") ? (<img src={Rain} alt='Rain'/>) :
                            (icons == "Drizzle") ? (<img src={Drizzle} alt='Drizzle'/>) :
                            (icons == "Mist") ? (<img src={Mist} alt='Mist'/>): <img src={Res} alt='res'/>
                            
                        }
                    </div>
                    <div className={styles.degrees}>
                        <p>{Math.round(weather.main.temp)} °C</p>
                    </div>
                    <div className={styles.cityName}>
                        <p>{weather.name}</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.humidity}>
                            <img src={humidity} alt="humidity" />
                            <div className={styles.descr}>
                                <p>{weather.main.humidity} %</p>
                                <p>humidity</p>
                            </div>
                        </div>
                        <div className={styles.wind}>
                            <img src={windPower} alt="windPower" />
                            <div className={styles.descr}>
                                <p>{weather.wind.speed} km/h</p>
                                <p>Wind speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default WeatherScrean;