import {autorun, observable} from 'mobx';

const initialStore = init(() => JSON.parse(localStorage.getItem('store')));
const initialSRemovedItems = init(JSON.parse(sessionStorage.getItem('removedItems')));

export const store = observable(initialStore);
export const removedItems = observable(initialSRemovedItems);

autorun(() => {
    localStorage.setItem('store', JSON.stringify(store))
});

autorun(() => {
    sessionStorage.setItem('removedItems', JSON.stringify(removedItems))
});

// Add action
export function getOrderedList() {
    return store.slice().sort((a, b) => {
        if (a.date === b.date && a.isCompleted === b.isCompleted) {
            return 0
        } else if (a.date === b.date) {
            return (a.isCompleted > b.isCompleted) ? 1 : -1
        } else {
            return (a.date > b.date) ? 1 : -1
        }
    })
}

// Add action
export function editTodo(id, prop, value) {
    const currentItem = store.find(item => item.id === id);
    currentItem[prop] = value;

    // For sort
    if (prop === 'isCompleted' && !value && store.remove(currentItem)) {
        store.push(currentItem);
    }
}

// Add action
export function addTodo(item) {
    store.push({
        ...item,
        id: Math.floor(Math.random() * Math.floor(1000000000)),
        isCompleted: false,
    });
}

// Add action
export function removeToDo(item) {
    const observableItem = store.find(_item => _item.id === item.id);
    if (store.remove(observableItem)) {
        removedItems.push(item);
    }
}

// Add action
export function restoreLastToDo() {
    const restoreItem = removedItems.pop();
    if (restoreItem) {
        store.push(restoreItem);
    }
}

function init(func) {
    try {
        return func()
    } catch (e) {
        return []
    }
}