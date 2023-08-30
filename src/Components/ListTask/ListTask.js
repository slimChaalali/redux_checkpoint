import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task';
import { Filter } from '../Filter/Filter';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);
    return (
        <div>
            {tasks.length > 0 && (<Filter tasks={tasks} setFiltredTasks={setFilteredTasks} />)}
            {filteredTasks.map((task, index) => (
                <Task task={task} index={index} key={task.id} />
            ))}
        </div>
    );
};

export default ListTask;


