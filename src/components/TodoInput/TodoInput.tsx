import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './TodoInput.module.css';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button 
        type="submit" 
        className={styles.button}
        disabled={!text.trim()}
      >
        <Plus size={20} />
        Add
      </button>
    </form>
  );
};
