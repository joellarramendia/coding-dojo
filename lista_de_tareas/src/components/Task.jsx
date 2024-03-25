import React, { useState } from 'react';
import './Task.css';

function Task() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);
  // Estado para almacenar el valor del campo de entrada
  const [inputValue, setInputValue] = useState('');

  // Función para manejar cambios en el campo de entrada
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9), // Genera un ID único para la tarea
        text: inputValue,
        completed: false
      };
      setTasks(prevTasks => [...prevTasks, newTask]); // Agrega la nueva tarea al estado
      setInputValue(''); // Limpia el campo de entrada
    }
  };

  // Función para marcar una tarea como completada
  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    );
  };

  return (
    <div className="Task">
      <h1>Lista de Tareas</h1>
      {/* Formulario para agregar nuevas tareas */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Agregar nueva tarea"
        /> <br />
        <button className='btn-add' onClick={handleAddTask}>Add</button>
      </div>
      {/* Lista de tareas */}
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
            <button className='btn-delete' onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
