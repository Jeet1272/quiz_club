import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';
import './Question.css'

const Question = ({ singleQuestion }) => {
    console.log(singleQuestion)
    const { id, question, options, correctAnswer } = singleQuestion


    return (
        <div className='single-quiz'>
            <h2>Q: {question.slice(3, -4)}</h2>
            <div>
                {
                    options.map(option => <Option option={option}></Option>)
                }
            </div>
            <button className='font-eye' onClick={() => alert(`${correctAnswer}`)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>

        </div>
    );
};

export default Question;