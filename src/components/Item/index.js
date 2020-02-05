import React, {useEffect} from 'react';
import {editTodo} from "../../store";
import {changeHandler} from '../../helpers/changeHandler';

export function Item({isCompleted, title, description, key}) {

    useEffect(() => {
        console.log('Item', 'Mount');

        return () => {
            console.log('Item', 'UNMount');
        }
    }, []);

    console.log('Item', 'Render');

    return (
        <div key={key}>
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
        </div>
    );

    //ToDo: Rename
    function onChange(name, value) {
        editTodo(key, name, value)
    }
};