import React, { useContext } from "react";
import { taskcontext } from "../contexts/TaskContext";

const Header = () => {

  const [tasks, setTasks] = useContext(taskcontext);

  return (
    <div className="w-[30%] h-[30%] border-2 rounded-xl flex justify-between items-center px-10 py-10">
      <div className="text-white">
        <h1 className="text-3xl font-semibold">Todo App</h1>
        <h5 className="text-sm font-semibold">Learning simple things.</h5>
      </div>
      <div className="w-20 h-20 flex-shrink-0 rounded-full bg-orange-600 flex items-center justify-center text-3xl font-semibold">
        {tasks.filter((task) => task.completed === true).length}/{tasks.length}
      </div>
    </div>
  );
};

export default Header;
