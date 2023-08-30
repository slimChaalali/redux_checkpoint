import React, { useState } from 'react'
import './Filter.css'

export const Filter = ({ tasks, setFiltredTasks }) => {
    const [completeFilter, setCompleteFilter] = useState('white');
    const [pendingFilter, setPendingFilter] = useState('white');
    const [allFilter, setAllFilter] = useState('green');


    const complete = () => {
        setCompleteFilter('green');
        const did = tasks.filter(todo => todo.isDone);
        setFiltredTasks(did);
        setAllFilter('white');
        setPendingFilter('white');
    }
    const pending = () => {
        setPendingFilter('green');
        const didnt = tasks.filter(todo => !todo.isDone);
        setFiltredTasks(didnt);
        setCompleteFilter('white');
        setAllFilter('white');
    }
    const all = () => {
        setFiltredTasks(tasks);
        setAllFilter('green');
        setCompleteFilter('white');
        setPendingFilter('white');
    }
    return (

        <div className='filter'>
            <div>
                <h6>Completed</h6>
                <button style={{ color: completeFilter }} onClick={complete}><i class="fa-solid fa-circle"></i></button>
            </div>
            <div>
                <h6>Pending</h6>
                <button style={{ color: pendingFilter }} onClick={pending}><i class="fa-solid fa-circle"></i></button>
            </div>
            <div>
                <h6>See all</h6>
                <button style={{ color: allFilter }} onClick={all}><i class="fa-solid fa-circle"></i></button>
            </div>
        </div>
    )
}
