import React from 'react';
import './numbers.css'

import { range } from 'underscore';

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'used';
        }        
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    };

    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, index) =>
                    <span key={index} className={numberClassName(number)} 
                    onClick={()=> props.selectNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    )
}

Numbers.list = range(1,10);

export default Numbers;