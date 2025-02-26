import React from "react";

const TaskList = ({ allTasks, handleDelete }) => {
  return (
    <ul className="my-4">
      {allTasks.map(({ title, description, id }) => (
        <li
          key={id}
          className="flex flex-col p-4 rounded-2xl shadow-2xl mt-2 mb-5 border border-gray-200"
        >
          <div className="border border-solid flex justify-center relative bg-gray-400 text-gray-100 py-1 px-2 rounded-md">
            <h2 className="capitalize font-semibold text-xl font-serif">
              {title}
            </h2>
            <button
              className="absolute right-0 mr-2"
              onClick={() => handleDelete(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {description && (
            <p className="text-center p-1 bg-gray-100 rounded-md text-md font-sans text-base leading-relaxed tracking-wide text-gray-900">
              {description}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
