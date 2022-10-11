import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    const { name, logo, questions } = quiz.data


    return (
        <div className='quiz-container'>
            <div>
                <h2>{name}</h2>
                <img src={logo} alt="" />
            </div>
            <div>
                {
                    questions.map(singleQuestion => <Question
                        key={singleQuestion.id}
                        singleQuestion={singleQuestion}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;