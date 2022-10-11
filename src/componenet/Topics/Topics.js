import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topicsObj = useLoaderData();
    const topics = topicsObj.data

    return (
        <div className='topic-container'>
            {
                topics.map(topic => <Topic
                    topic={topic}
                    key={topic.id}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;