import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/TaskSlice';
import '../styles/Task.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTask(task.id));

  const handleEdit = () => {
    const newDescription = prompt('Edit Task:', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, newDescription }));
    }
  };

  return (
    <div className="task">
      <span className={task.isDone ? 'done' : ''}>{task.description}</span>
      <button onClick={handleToggle}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
