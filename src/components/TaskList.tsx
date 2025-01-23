import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TaskListProps {
  tasks: { id: number; name: string }[];
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  const navigate = useNavigate();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.name}</span>
          <div className="task-actions">
            <button
              className="task-btn"
              onClick={() => navigate(`/edit/${task.id}`)}
            >
              Editar
            </button>
            <button
              className="task-btn"
              onClick={() => onDelete(task.id)}
            >
              Excluir
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
