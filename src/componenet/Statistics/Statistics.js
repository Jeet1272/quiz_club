import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const dataObj = useLoaderData()
    const data = dataObj.data

    return (
        <div className="statistics">
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Statistics;