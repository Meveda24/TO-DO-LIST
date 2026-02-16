import React from 'react';
import { ClipboardList } from 'lucide-react';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import { Todo } from '../../App';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <div className={styles.emptyState}>
                <ClipboardList size={48} style={{ opacity: 0.2, margin: '0 auto' }} />
                <p>No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <div className={styles.list}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
