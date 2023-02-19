import React from 'react';
import './StackedBarChar.scss';
import {BarChart, Bar, XAxis, ResponsiveContainer} from 'recharts';
import {barChartData} from "../chartsData";


const StackedBarChar = () => {

    return (
        <ResponsiveContainer height={300} width='100%'>
            <BarChart data={barChartData}>
                <XAxis dataKey={'name'} stroke={'#A3AED0'}
                       style={{fontFamily: 'DM Sans, sans-serif', fontWeight: 700}}/>
                <Bar dataKey={'value1'} stackId={'a'} fill={'#775FFC'} barSize={25}/>
                <Bar dataKey={'value2'} stackId={'a'} fill={'#84D9FD'}/>
                <Bar dataKey={'value3'} stackId={'a'} fill={'#E6EDF9'} radius={[10, 10, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChar;