import React from 'react';
import { Trash2 } from 'lucide-react';
import styles from './TodoItem.module.css';
import { Todo } from '../../App'; // We will define this type in App.tsx

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span className={styles.text}>{todo.text}</span>
            <button
                className={styles.deleteBtn}
                onClick={() => onDelete(todo.id)}
                aria-label="Delete task"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
};
