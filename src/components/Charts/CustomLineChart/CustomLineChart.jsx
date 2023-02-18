import React from 'react';
import {LineChart, CartesianGrid, Line, ResponsiveContainer, XAxis, YAxis} from "recharts";

const CustomLineChart = ({data}) => {
    return (
        <ResponsiveContainer height={300}>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="age" stroke="#4318FF" strokeWidth={2} fill={'#4318FF'}/>
                <Line type="monotone" dataKey="age2" stroke="#6AD2FF" strokeWidth={2} fill={'#6AD2FF'}/>
                <CartesianGrid display={'none'}/>
                <XAxis dataKey="name" stroke={'#A3AED0'}/>
                <YAxis display={'none'}/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;