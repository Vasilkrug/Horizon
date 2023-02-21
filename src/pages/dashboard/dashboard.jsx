import React from 'react';
import './dashboard.scss';
import InfoList from "../../components/InfoList/InfoList";
import CustomLineChart from "../../components/Charts/CustomLineChart/CustomLineChart";
import GridItemBox from "../../components/GridItemBox/GridItemBox";
import LineChartInfo from "../../components/LineChartInfo/LineChartInfo";
import MoreButton from "../../components/UI/MoreButton/MoreButton";
import {more, stat} from "../../assets/images/icons/icons";
import StackedBarChar from "../../components/Charts/StackedBarChar/StackedBarChar";
import {lineChartData, barChartData, dailyTraffic, pieData} from "../../components/Charts/chartsData";
import CustomPieChart from "../../components/Charts/CustomPieChart/CustomPieChart";
import TaskList from "../../components/TaskList/TaskList";
import {useIsVisible} from "../../hooks/useIsVisible";
import Modal from "../../components/Modal/Modal";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import {useState} from "react";

const Dashboard = () => {
    const [isModalVisible, showModalToggle] = useIsVisible(false);
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');

    const inputHandler = (text) => {
        setInputText(text)
    }
    const addTask = () => {
        setTasks([{id: Date.now(), text: inputText}, ...tasks])
         showModalToggle()
        setInputText('')
    }


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
                    barsDataKey={['value1', 'value2', 'value3']}
                    colors={['#775FFC', '#84D9FD', '#E6EDF9']}/>
            </GridItemBox>
            <div className={'two-charts'}>
                <GridItemBox classname={'grid-item'} left={'Daily traffic'} right={'+2.45%'}>
                    <StackedBarChar data={dailyTraffic} dataKey={'key'} barSize={20} colors={['#8569FF']}
                                    barsDataKey={['value']}/>
                </GridItemBox>
                <GridItemBox classname={'grid-item'} left={'Your Pie Chart'}>
                    <CustomPieChart data={pieData}/>
                </GridItemBox>
            </div>
            <div className={'task-list-calendar'}>
                <GridItemBox
                    left={'Tasks'}
                    right={<MoreButton
                        img={more}/>}
                    classname={'grid-item tasks'}
                    menu={'Add task'}
                    popupOnclick={showModalToggle}
                >
                    <TaskList tasks={tasks}/>
                    {isModalVisible ? <Modal inputValue={inputText} title={'Add task'} onChange={inputHandler}>
                        <CustomButton onClick={addTask} text={'Add'} styles={{backgroundColor: '#A3AED0'}}/>
                        <CustomButton onClick={showModalToggle} text={'Cancel'} styles={{backgroundColor: '#A3AED0'}}/>
                    </Modal> : null}
                </GridItemBox>
                <GridItemBox left={'Calendar'} classname={'grid-item'}>
                </GridItemBox>
            </div>
        </div>
    );
};

export default Dashboard;