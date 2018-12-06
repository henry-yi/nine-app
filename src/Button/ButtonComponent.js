import React from 'react';
import './button.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faRedo } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck);
library.add(faTimes);
library.add(faRedo);

const Button = (props) => {
    let button;

    switch(props.answerIsCorrect) {
        case true:
            button =
                <button className="btn btn-success" onClick={props.acceptAnswer}>
                    <FontAwesomeIcon className="fa fa-check" icon="check" />
                </button>
            break;
        case false:
            button =
                <button className="btn btn-danger">
                    <FontAwesomeIcon className="fa fa-times" icon="times" />
                </button>
            break;
        default:
            button = 
                <button className="btn" 
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0}>=</button>
    }
    return (
            <div className="col-2">
                {button}
                <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws === 0}>
                    <FontAwesomeIcon className="fa fa-redo" icon="redo" /> {props.redraws}
                </button>
            </div>
    )
}

export default Button;