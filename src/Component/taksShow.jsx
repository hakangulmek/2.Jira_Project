import React, { useState } from "react";
import Task_Create from "./taskCreate";

function taksShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <Task_Create
          task={task}
          taskformUpdate={true}
          onUpdate={handleSubmit}
        />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className="task-delete">
              Sil
            </button>
            <button onClick={handleEditClick} className="task-update">
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default taksShow;
