import React from 'react';
import Option from '../Option/Option';

const Question = ({ singleQuestion }) => {
    const { id, question, options } = singleQuestion
    return (
        <div>
            <h2>{question}</h2>
            {
                options.map(option => <Option option={option}></Option>)
            }

        </div>
    );
};

export default Question;