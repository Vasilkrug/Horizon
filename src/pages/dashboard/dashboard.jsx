import React from 'react';
import './dashboard.scss';
import InfoList from "../../components/InfoList/InfoList";
import CustomLineChart from "../../components/Charts/CustomLineChart/CustomLineChart";
import GridItemBox from "../../components/GridItemBox/GridItemBox";
import LineChartInfo from "../../components/LineChartInfo/LineChartInfo";

const Dashboard = () => {
    const data1 = [
        {name: 'SEP', age: 5, age2: 3},
        {name: 'OCT', age: 5, age2: 3},
        {name: 'NOV', age: 4, age2: 2},
        {name: 'DEC', age: 7, age2: 5},
        {name: 'JAN', age: 3, age2: 1},
        {name: 'FEB', age: 4, age2: 2},
    ]

    return (
        <div className={'dashboard-page'}>
            <InfoList classname={'grid-info-list'}/>
            <GridItemBox classname={'line-chart'}>
                <LineChartInfo/>
                <CustomLineChart data={data1}/>
            </GridItemBox>

            <div className={'bar-chart'}>
                bar
            </div>
        </div>
    );
};

export default Dashboard;