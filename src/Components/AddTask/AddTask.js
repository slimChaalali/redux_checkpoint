import React, { useState } from 'react'
import { addTask } from '../../Redux/TaskSlice/TaskSlice'
import { useDispatch } from 'react-redux'
import '../AddTask/AddTask.css'
import { nanoid } from 'nanoid';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleInputValue = (event) => {
        setDescription(event.target.value);
    }
    const addToDo = () => {
        if (description.trim() !== '') {
            dispatch(addTask({
                id: nanoid(),
                description,
                isDone: false,
            })
            )
            setDescription('');
        }
    }

    return (
        <div className='add'>
            <h4>Create Your Task!</h4>
            <input type="text" value={description} onChange={handleInputValue} placeholder='add description' />
            <button onClick={addToDo}>add task</button>
        </div>
    )
}

export default AddTask