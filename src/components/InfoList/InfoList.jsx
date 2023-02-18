import React from 'react';
import './InfoList.scss';
import {infoList} from "../../dataForHtmlelements/data";

const InfoList = ({classname}) => {
    return (
        <div className={`info-list ${classname}`}>
            {infoList.map(item => {
                return <div className="info-item">
                    {item.icon ? <div className="info-icon">
                        <img src={item.icon} alt=""/>
                    </div> : null}
                    <div className="info-desc">
                        <span>{item.title}</span>
                        <p>{item.stat}</p>
                    </div>
                </div>
            })}

        </div>
    );
};

export default InfoList;