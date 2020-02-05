import {observable} from 'mobx';

export const store = observable([
    {
        key: 0,
        title: 'initial title',
        description: 'init desc',
        isCompleted: false,
        startTime: '',
        endTime: '',
    },
]);

export function editTodo(idx, prop, value) {
    store[idx][prop] = value;
}

export function addTodo(item) {
    store.push({
        ...item,
        key: store.length,
        isCompleted: false,
    });
}