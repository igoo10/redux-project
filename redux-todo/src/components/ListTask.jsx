import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/TaskSlice';
import Task from './Task';
import '../styles/ListTask.css'; 

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    filter === 'all'
      ? true
      : filter === 'done'
      ? task.isDone
      : !task.isDone
  );

  return (
    <div>
      <div className="filters"> {/* Add class for styling */}
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('not-done'))}>
          Not Done
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
