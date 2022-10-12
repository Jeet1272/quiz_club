import React from 'react';
import './Option.css'

const Option = ({ option, singleQuestion }) => {
    const { correctAnswer } = singleQuestion
    console.log(singleQuestion)
    const correctAnswerChequer = (option) => {
        if (option === correctAnswer) {
            alert(true)
        }
        else alert(false)
    }
    return (
        <div>
            <div className='option-field' onClick={() => correctAnswerChequer(option)}>
                <input type="radio" value={option} name="option" />{option}
            </div>
        </div>
    );
};

export default Option;