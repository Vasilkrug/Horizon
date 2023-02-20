import React from 'react';
import './dashboard.scss';
import InfoList from "../../components/InfoList/InfoList";
import CustomLineChart from "../../components/Charts/CustomLineChart/CustomLineChart";
import GridItemBox from "../../components/GridItemBox/GridItemBox";
import LineChartInfo from "../../components/LineChartInfo/LineChartInfo";
import MoreButton from "../../components/UI/MoreButton/MoreButton";
import {more, stat} from "../../assets/images/icons/icons";
import StackedBarChar from "../../components/Charts/StackedBarChar/StackedBarChar";
import {lineChartData,barChartData} from "../../components/Charts/chartsData";

const Dashboard = () => {

    return (
        <div className={'dashboard-page'}>
            <InfoList classname={'grid-info-list'}/>
            <GridItemBox classname={'line-chart grid-item'} left={'This month'} right={<MoreButton img={stat}/>}>
                <LineChartInfo/>
                <CustomLineChart data={lineChartData}/>
            </GridItemBox>
            <GridItemBox classname={'bar-chart grid-item'} left={'Weekly Revenue'} right={<MoreButton img={stat}/>}>
                <StackedBarChar
                    data={barChartData}
                    dataKey={'name'}
                    barSize={25}
                    barsDataKey={['value1','value2','value3']}
                colors={['#775FFC', '#84D9FD','#E6EDF9']}/>
            </GridItemBox>
        </div>
    );
};

export default Dashboard;