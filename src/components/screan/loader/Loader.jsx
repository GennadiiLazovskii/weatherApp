import {BallTriangle} from 'react-loader-spinner'

const Loader = () => {

    return(
        <BallTriangle
        height={400}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}/>
    )
}

export default Loader;