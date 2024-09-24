// TaskForm.js
import React, { useState, useEffect } from 'react';
import { useTasks } from './TaskContext';

const TaskForm = ({currentTask, setCurrentTask, isEditing, setIsEditing }) => {
  const { dispatch } = useTasks();
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [revenue, setRevenue] = useState('');
  const [profit, setProfit] = useState('');

  useEffect(() => {
    if (isEditing) {
      setName(currentTask.name);
      setCost(currentTask.cost);
      setDate(currentTask.date);
      setRevenue(currentTask.revenue);
      setProfit(currentTask.profit);
    } else {
      setName('');
      setCost('');
      setDate('');
      setRevenue('');
      setProfit('');
    }
  }, [currentTask, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, cost, date, revenue, profit };
    if (isEditing) {
      dispatch({ type: 'UPDATE_TASK', payload: { index: currentTask.index, updatedTask: newTask } });
      setIsEditing(false);
    } else {
      dispatch({ type: 'ADD_TASK', payload: newTask });
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setCost('');
    setDate('');
    setRevenue('');
    setProfit('');
  };

  return (
    <form onSubmit={handleSubmit} className='w-full border border-gray-300 p-4 mb-10 space-x-3 space-y-2 '>
      <input className='p-2 text-lg border border-gray-600' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"  required />
      <input className='p-2 text-lg border border-gray-600' type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" required />
      <input className='p-2 text-lg border border-gray-600' type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input className='p-2 text-lg border border-gray-600' type="number" value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="Revenue" required />
      <button className='p-2 border border-gray-800 bg-gray-200 hover:bg-gray-300' type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
