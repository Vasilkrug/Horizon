import React from 'react';
import './StackedBarChar.scss';
import {BarChart, Bar, XAxis, ResponsiveContainer} from 'recharts';


const StackedBarChar = ({data, dataKey, barSize, barsDataKey, colors}) => {

    return (
        <ResponsiveContainer height={300} width='100%'>
            <BarChart data={data}>
                <XAxis dataKey={dataKey} stroke={'#A3AED0'}
                       style={{fontFamily: 'DM Sans, sans-serif', fontWeight: 700}}/>
                {barsDataKey.map((bar, index) => {
                    return <Bar
                        dataKey={bar}
                        stackId={'a'}
                        fill={colors[index] ? colors[index] : 'gray'}
                        barSize={barSize}
                        radius={index === barsDataKey.length - 1 ? [10, 10, 0, 0] : null}
                    />
                })}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChar;