import React from "react";

const TaskList = ({ allTasks, handleDelete }) => {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {description && <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
