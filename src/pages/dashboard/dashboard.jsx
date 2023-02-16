import React from 'react';
import './dashboard.scss';
import InfoList from "../../components/InfoList/InfoList";

const Dashboard = () => {
    return (
        <div className={'dashboard-page'}>
          <InfoList/>
            <div className="area-chart"></div>

        </div>
    );
};

export default Dashboard;