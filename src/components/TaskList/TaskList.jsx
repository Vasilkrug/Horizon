import React from 'react';
import './TaskList.scss';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks}) => {


    const getId = (id) => {
        console.log(id)
    }
    return (
        <div className={'task-list'}>
            {!tasks.length ? <h3>Add tasks</h3> :
                tasks.map(task => {
                    return <TaskItem getId={getId} key={task.id} id={task.id} text={task.text}/>
                })}

        </div>
    );
};

export default TaskList;