
import video from "./403Error.mp4"
import { Link } from 'react-router-dom';

const Error403 = () => {
    return (
        <main className="main__404">
            <div className='error' >
                <video autoPlay loop muted
                    src={video} type="video/mp4">
                </video>
                <div className='error__description'>

                    <h1 className='error__description-title'>403</h1>
                    <p>Vous n'avez pas les droits !</p>

                    <Link to={'/'}>
                        <button
                            className="btn waves-effect waves-light grey darken-3 button"
                            type="submit"
                            name="action">
                            Retour à l'accueil
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Error403;