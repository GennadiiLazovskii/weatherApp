import humidity from '../../img/humidity.png';
import windPower from '../../img/wind-power.png';
import styles from './WeatherFooter.module.scss';

const WeatherFooter = ({weather}) => {

    return (
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
    )
}

export default WeatherFooter;