import React, { useState } from 'react';

interface TaskFormProps {
  initialData?: { name: string }; // Permite que initialData seja opcional
  onSubmit: (data: { name: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit({ name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TaskForm;
