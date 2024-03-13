import React from "react";
import TaskShow from "./taksShow";

function taskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="Task-List">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            onDelete={onDelete}
            key={index}
            task={task}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default taskList;
