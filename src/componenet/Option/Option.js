import React from 'react';
import './Option.css'

const Option = ({ option }) => {

    return (
        <div className='option-field'>
            <input type="radio" value={option} name="option" />{option}

        </div>
    );
};

export default Option;