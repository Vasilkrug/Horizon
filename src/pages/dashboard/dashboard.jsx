import React from 'react';
import './dashboard.scss';
import InfoList from "../../components/InfoList/InfoList";
import CustomLineChart from "../../components/Charts/CustomLineChart/CustomLineChart";
import GridItemBox from "../../components/GridItemBox/GridItemBox";
import LineChartInfo from "../../components/LineChartInfo/LineChartInfo";
import MoreButton from "../../components/UI/MoreButton/MoreButton";
import {stat} from "../../assets/images/icons/icons";
import StackedBarChar from "../../components/Charts/StackedBarChar/StackedBarChar";
import {lineChartData} from "../../components/Charts/chartsData";

const Dashboard = () => {

    return (
        <div className={'dashboard-page'}>
            <InfoList classname={'grid-info-list'}/>
            <GridItemBox classname={'line-chart'} left={'This month'} right={<MoreButton img={stat}/>}>
                <LineChartInfo/>
                <CustomLineChart data={lineChartData}/>
            </GridItemBox>
            <GridItemBox classname={'bar-chart'} left={'Weekly Revenue'} right={<MoreButton img={stat}/>}>
                <StackedBarChar/>
            </GridItemBox>
        </div>
    );
};

export default Dashboard;