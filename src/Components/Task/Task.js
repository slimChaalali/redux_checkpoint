import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateDone, updateTask } from '../../Redux/TaskSlice/TaskSlice';
import './Task.css';

const Task = ({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(task.description);
  const [isDone, setIsDone] = useState(task.isDone)
  const dispatch = useDispatch();
  const color = isDone ? 'green' : 'red';
  const textDecoration = isDone ? 'line-through' : 'none';

  const done = () => {
    setIsDone(!isDone);
    dispatch(updateDone({
      key: index,
      inDones: !isDone
    }));
  };


  const handleInputChange = (event) => {
    setContent(event.target.value);
  };
  const updateStore = () => {
    dispatch(updateTask({
      description: content,
      key: index
    }))
  }
  return (

    <div className='task'>

      {isEditing ? (
        <div className='task_input'>
          <input
            type="text"
            value={content}
            onChange={handleInputChange}
          />
          <button onClick={() => {(content.trim() !== '') && setIsEditing(false); updateStore() }}>Save</button>
        </div>
      ) : (
        <div className='task-content'>
          <h6>{index + 1}.</h6>
          <h5 style={{ textDecoration }}>{content}</h5>
          <div className='buttons'>
            <button style={{ color }} onClick={done} className='check'>
              {isDone ? (<i class="fa-regular fa-circle-check"></i>) : (<i class="fa-regular fa-hourglass"></i>)}</button>
            <button onClick={() => setIsEditing(true)} className='edit'>Edit</button>

          </div>
        </div>
      )}
    </div>

  )
}

export default Task