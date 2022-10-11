import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, logo, id } = topic
    return (
        <div className='single-topic'>
            <h1>{name}</h1>
            <img src={logo} alt="" />
            <div>
                <button><Link to={`/quiz/${id}`}>Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default Topic;