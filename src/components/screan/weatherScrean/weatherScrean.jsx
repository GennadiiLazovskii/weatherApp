import styles from './weatherScrean.module.scss';
import humidity from '../../img/humidity.png';
// import raining from '../../img/raining.png';
// import snow from '../../img/snow.png';
import sun from '../../img/sun.png';
import windPower from '../../img/wind-power.png';

const WeatherScrean = () => {

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.serch}>
                    <input type="text" />
                    <button></button>
                </div>
                <div className={styles.images}>
                    <img src={sun} alt="sun" />
                </div>
                <div className={styles.degrees}>
                    <p>7 °C</p>
                </div>
                <div className={styles.cityName}>
                    <p>London</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.humidity}>
                        <img src={humidity} alt="humidity" />
                        <div className={styles.descr}>
                            <p>23%</p>
                            <p>humidity</p>
                        </div>
                    </div>
                    <div className={styles.wind}>
                        <img src={windPower} alt="windPower" />
                        <div className={styles.descr}>
                            <p>2.3 km/h</p>
                            <p>windPower</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherScrean;