import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredTasks = createSelector(
  [selectTasks, state => state.filters],
  (tasks, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return tasks.filter(
      task =>
        task.name.toLowerCase().includes(normalizedFilter) ||
        task.number.includes(normalizedFilter)
    );
  }
);
