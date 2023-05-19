import styles from './weatherScrean.module.scss';
import serchBtn from '../../img/search.png';
import { useEffect, useState } from 'react';
import WetherService from '../../service/weather.service';
import { useForm } from 'react-hook-form';
import Loader from '../loader/Loader';
import ImagesWeather from '../ImagesWeather/Images';
import WeatherFooter from '../weatherFooter/WeatherFooter';

const WeatherScrean = () => {

    const [weather, setWeather] = useState();
    const [icons, setIcons] = useState();
    const [cyti, setCyti] = useState('kyiv');

    const { register, reset, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setCyti(data.cityName);
        reset();
    };

    useEffect(() => {

        // navigator.geolocation.getCurrentPosition((position) => {
        //     setLatitude(position.coords.latitude);
        //     setLongitude(position.coords.longitude)
        // })

        const fetchData = async () => {
            const response = await WetherService.getAll(cyti)
            setWeather(response)
            setIcons(response.weather[0].main)
        }
        fetchData();
    }, [cyti])

    return (
        <div className={styles.wrapper}>
            {weather !== undefined ? (
                <div>
                    <div className={styles.serch}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register('cityName', { required: true })} />
                            <input className={styles.serchBtn} type='image' src={serchBtn} alt='Submit' />
                        </form>
                    </div>
                    <div className={styles.images}>
                        <ImagesWeather icons={icons}/>
                    </div>
                    <div className={styles.degrees}>
                        <p>{Math.round(weather.main.temp)} °C</p>
                    </div>
                    <div className={styles.cityName}>
                        <p>{weather.name}</p>
                    </div>
                    <div>
                        <WeatherFooter weather={weather}/>
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    );
}

export default WeatherScrean;