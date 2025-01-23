import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

interface Task {
  id: number;
  name: string;
}

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
  };

  const addTask = async (data: { name: string }) => {
    const response = await axios.post('http://localhost:3001/tasks', data);
    setTasks((prev) => [...prev, response.data]);
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default HomePage;
