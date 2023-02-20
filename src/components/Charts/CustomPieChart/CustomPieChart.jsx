import React from 'react';
import './CustomPieChart.scss';
import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from "recharts";

const CustomPieChart = ({data}) => {
    const colors = ["#4318FF", "#6AD2FF"];

    return (
        <ResponsiveContainer width='100%' height={300}>
            <PieChart>
                <Pie data={data} dataKey={'value'} nameKey={'name'} fill="#EFF4FB">
                    {data.map((item, index) => {
                        return <Cell fill={colors[index]}/>
                    })}
                </Pie>
                <Legend iconType={'circle'}/>
                <Tooltip contentStyle={{fontFamily: 'DM Sans,sans-serif', border: 'none'}}/>
            </PieChart>

        </ResponsiveContainer>
    );
};

export default CustomPieChart;