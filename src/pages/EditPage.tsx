import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskForm from '../components/TaskForm';

const EditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [task, setTask] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`http://localhost:3001/tasks/${id}`);
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  const updateTask = async (data: { name: string }) => {
    await axios.put(`http://localhost:3001/tasks/${id}`, data);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Editar Tarefa</h1>
      {task ? (
        <TaskForm initialData={task} onSubmit={updateTask} />
      ) : (
        <p>Carregando tarefa...</p>
      )}
    </div>
  );
};

export default EditPage;
