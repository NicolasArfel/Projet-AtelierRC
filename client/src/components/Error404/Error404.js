import './Error404.css'
import video from "./404Error.mp4"
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <main className="main__404" >
            <div className='error' >
                <video autoPlay loop muted
                    src={video} type="video/mp4">
                </video>
                <div className='error__description'>

                    <h1 className='error__description-title'>404</h1>
                    <p>OUPS, y a rien à voir ici !</p>
                    <p>Pour retourner à l'accueil</p>
                    <Link to={'/'}>
                        <button
                            className="btn waves-effect waves-light grey darken-3 button"
                            type="submit"
                            name="action">
                            C'est par là !
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Error404;