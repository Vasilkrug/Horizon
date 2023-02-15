import React from 'react';
import './UpgradeInfo.scss';
import CustomButton from "../UI/CustomButton/CustomButton";

const UpgradeInfo = () => {
    return (
        <div className="upgrade">
            <h3>Upgrade to PRO</h3>
            <p>to get access to all features! Connect with Venus World! </p>
            <CustomButton text={'Upgrade Now'}/>
        </div>
    );
};

export default UpgradeInfo;