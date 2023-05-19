import Clouds from '../../img/clouds.png';
import Clear from '../../img/sun.png';
import Rain from '../../img/raining.png';
import Drizzle from '../../img/drizzle.png';
import Mist from '../../img/haze.png';
import Res from '../../img/1.png';

const ImagesWeather = ({icons}) => {
        return (
            <div>
                {(icons == "Clouds") ? (<img src={Clouds} alt='Clouds' />) :
                    (icons == "Clear") ? (<img src={Clear} alt='Clear' />) :
                        (icons == "Rain") ? (<img src={Rain} alt='Rain' />) :
                            (icons == "Drizzle") ? (<img src={Drizzle} alt='Drizzle' />) :
                                (icons == "Mist") ? (<img src={Mist} alt='Mist' />) : <img src={Res} alt='res' />}
            </div>
        );
    }

export default ImagesWeather;