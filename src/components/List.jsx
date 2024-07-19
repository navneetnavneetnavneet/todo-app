import React, { useContext } from "react";
import { taskcontext } from "../contexts/TaskContext";

const List = () => {
  const [tasks, setTasks] = useContext(taskcontext);

  const completeHandler = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    setTasks(copyTasks);
    localStorage.setItem("tasks", JSON.stringify(copyTasks));
  };

  const deleteHandler = (id) => {
    const newTasks = tasks.filter((taks) => taks.id !== id);

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <>
      {tasks.map((task, index) => {
        return (
          <div
            key={task.id}
            className="w-[30%] px-4 py-2 border-2 rounded-md mt-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                onClick={() => completeHandler(index)}
                className={`w-5 h-5 cursor-pointer rounded-full border-2 ${
                  task.completed === true ? "bg-green-600" : "border-orange-600"
                }`}
              ></div>
              <h1
                className={`text-xl font-semibold text-white ${
                  task.completed === true ? "line-through" : ""
                }`}
              >
                {task.title}
              </h1>
            </div>
            <div className="flex items-center gap-5 text-white text-xl">
              <i className="ri-pencil-line"></i>
              <i
                onClick={() => deleteHandler(task.id)}
                className="ri-delete-bin-line"
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
