import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { taskcontext } from "../contexts/TaskContext";

const CreateTodo = () => {
  const [tasks, setTasks] = useContext(taskcontext);

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTitle = { id: nanoid(), title, completed: false };
    setTasks([...tasks, newTitle]);

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTitle]));
    setTitle("");
  };

  return (
    <div className="w-[30%] my-10 flex items-center justify-center gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-full px-4 py-2 rounded-xl outline-none border-2 bg-transparent text-white text-xl"
        type="text"
        placeholder="Create a new todo"
      />
      <button
        onClick={submitHandler}
        className="w-12 h-12 flex-shrink-0 bg-orange-600 rounded-full text-3xl font-semibold"
      >
        +
      </button>
    </div>
  );
};

export default CreateTodo;
