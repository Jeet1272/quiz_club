import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topicsObj = useLoaderData();
    const topics = topicsObj.data

    return (
        <div>
            <h2>This is all Topics{topics.length}</h2>
        </div>
    );
};

export default Topics;