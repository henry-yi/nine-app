import React from 'react';

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, index)=> 
                <span key={index} onClick={()=> props.unselectNumber(number)}>
                    {number}
                </span>    
            )}
        </div>
    )
}

export default Answer;