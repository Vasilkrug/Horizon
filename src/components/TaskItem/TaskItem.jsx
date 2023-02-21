import React, {useState} from 'react';
import './TaskItem.scss';
import {BsCheckSquareFill, BsSquare} from "react-icons/bs";
import {FiMoreVertical} from "react-icons/fi";

const TaskItem = ({id, text, getId}) => {
    const [checked, setChecked] = useState(false);

    const checkToggle = () => {
        setChecked(!checked)
    }
    const process = (id) => {
        checkToggle()
        if (!checked) {
            getId(id)
        }

    }
    return (
        <div className={'task-item'}>
            <button onClick={() => process(id)}>
                {checked ? <BsCheckSquareFill color={'#4318FF'}/> : <BsSquare/>}
            </button>
            <p>{text}</p>
            <FiMoreVertical size={22} className={'task-icon'}/>
        </div>
    );
};

export default TaskItem;