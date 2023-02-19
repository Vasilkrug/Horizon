import React from 'react';
import {LineChart, CartesianGrid, Line, ResponsiveContainer, XAxis} from "recharts";

const CustomLineChart = ({data}) => {

    return (
            <ResponsiveContainer height={300} width={'80%'}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="age" stroke="#4318FF" strokeWidth={2} fill={'#4318FF'}/>
                    <Line type="monotone" dataKey="age2" stroke="#6AD2FF" strokeWidth={2} fill={'#6AD2FF'}/>
                    <CartesianGrid display={'none'}/>
                    <XAxis dataKey="name" stroke={'#A3AED0'} style={{fontFamily:'DM Sans, sans-serif',fontWeight:700}}/>
                </LineChart>
            </ResponsiveContainer>
    );
};

export default CustomLineChart;