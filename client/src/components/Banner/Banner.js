import PropTypes from 'prop-types';

import './Banner.css'

const Banner = ( {title, description}) => {
    return (
        <div className="banner ">
                <h1 className="banner__title" > {title} </h1>
                <p className="banner__description" > {description} </p>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Banner;