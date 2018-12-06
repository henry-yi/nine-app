import React from 'react';
import './stars.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { range } from 'underscore';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

const Stars = (props) => {

    return (
        <div className="col-5">
            {range(props.randomNumberOfStars).map(index =>
                <FontAwesomeIcon key={index} className="fa-star" icon="star" />
            )}
        </div>
    )
}

export default Stars;