import { useState, useEffect } from 'react';
import { TodoInput } from './components/TodoInput/TodoInput';
import { TodoList } from './components/TodoList/TodoList';
import { FilterBar } from './components/FilterBar/FilterBar';
import styles from './App.module.css';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Task Master</h1>
        <p className={styles.subtitle}>
          {activeCount} items left to do
        </p>
      </header>

      <TodoInput onAdd={addTodo} />

      <FilterBar
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
