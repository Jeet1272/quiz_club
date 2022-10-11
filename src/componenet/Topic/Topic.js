import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    return (
        <div className='single-topic'>
            <h1>{topic.name}</h1>
            <img src={topic.logo} alt="" />
            <div>
                <button>Something</button>
            </div>
        </div>
    );
};

export default Topic;