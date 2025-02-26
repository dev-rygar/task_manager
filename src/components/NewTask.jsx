import React from "react";

const NewTask = ({ newTask, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="title" className="text-xs ml-2 mb-2 font-medium">
        Create task:
      </label>
      <input
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
        className="mb-2 rounded-xl shadow-2xl border-none"
      />
      {newTask.title && (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
            className="mb-2 border-none shadow-2xl "
          />
          <button
            className="mb-1 py-1 px-1 mr-1 shadow-2xl border-2 text-white bg-black hover:bg-gray-200 hover:text-black hover:border-gray-100 hover:font-medium hover:cursor-pointer"
            type="submit"
          >
            Add Task
          </button>
        </>
      )}
    </form>
  );
};

export default NewTask;

// Features to add
// Disable state while input field is empty
