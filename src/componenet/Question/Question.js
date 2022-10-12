import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';
import './Question.css'

const Question = ({ singleQuestion }) => {
    const { id, question, options, correctAnswer } = singleQuestion
    const notify = () => toast(correctAnswer);

    return (
        <div className='single-quiz'>
            <h2>Q: {question.slice(3, -4)}</h2>
            <div>
                {
                    options.map(option => <Option option={option}></Option>)
                }
            </div>
            <button className='font-eye' onClick={() => notify(id)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button><ToastContainer />

        </div>
    );
};

export default Question;