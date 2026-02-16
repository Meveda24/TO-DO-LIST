import React from 'react';
import styles from './FilterBar.module.css';
import { FilterType } from '../../App';

interface FilterBarProps {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange }) => {
    const filters: FilterType[] = ['all', 'active', 'completed'];

    return (
        <div className={styles.filters}>
            {filters.map(filter => (
                <button
                    key={filter}
                    className={`${styles.filterBtn} ${currentFilter === filter ? styles.active : ''}`}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    );
};
