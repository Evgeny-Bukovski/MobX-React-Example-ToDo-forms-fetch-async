import React from 'react';
import {editTodo, removeToDo} from "../../store";
import {changeHandler} from '../../helpers/changeHandler';
import {watcher} from "../../helpers/watcher";
import {customHistory} from '../../containers/App';

export const Item = watcher((item) => {
    const {isCompleted, id, title, description, date} = item;

    return (
        <div>
            <input type="checkbox"
                   name="isCompleted"
                   checked={isCompleted}
                   onChange={changeHandler(onChange)}/>

            <input type="text"
                   name="title"
                   value={title}
                   onChange={changeHandler(onChange)}/>

            <input type="textarea"
                   name="description"
                   value={description}
                   onChange={changeHandler(onChange)}/>

            <input type="textarea"
                   name="date"
                   value={date}
                   onChange={changeHandler(onChange)}/>

            <span onClick={removeHandler}>-- Delete --</span>
            &nbsp;&nbsp;&nbsp;
            <span onClick={openTask}>(OPEN)</span>
        </div>
    );

    function openTask() {
        customHistory.pushState(`/task/${id}`)
    }

    function removeHandler() {
        removeToDo(item)
    }

    //ToDo: Rename
    function onChange(name, value) {
        editTodo(id, name, value)
    }
}, 'Item');