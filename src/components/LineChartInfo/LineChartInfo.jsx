import React from 'react';
import './LineChartInfo.scss';
import {IoMdArrowDropup} from "react-icons/io";
import {done} from "../../assets/images/icons/icons";

const LineChartInfo = () => {
    return (
        <div className={'line-chart-info'}>
            <h3>$37.5K</h3>
            <div className={'total'}>Total Spent <IoMdArrowDropup color={'#05CD99'} size={30}/> <span>+2.45%</span></div>
            <p className={'track'}><img src={done} alt=""/> On track</p>
        </div>
    );
};

export default LineChartInfo;