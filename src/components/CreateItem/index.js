import React, {useState, useEffect} from 'react';
import {addTodo} from "../../store";

export function CreateItem() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        console.log('CreateItem', 'Mount');

        return () => {
            console.log('CreateItem', 'UNMount');
        }
    }, []);

    console.log('CreateItem', 'Render');

    return (
        <div>
            <input type="text"
                   name="title"
                   value={title}
                   onChange={onChange}/>

            <input type="textarea"
                   name="description"
                   value={description}
                   onChange={onChange}/>

            <input type="datetime-local"
                   name="startTime"
                   value={startTime}
                   onChange={onChange}/>

            <input type="datetime-local"
                   name="endTime"
                   value={endTime}
                   onChange={onChange}/>

            <button onClick={addTodoHandler}>Add task</button>
        </div>
    );

    //ToDO: Rename?
    function onChange(e) {
        const {name, value} = e.target;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'startTime':
                setStartTime(value);
                break;
            case 'endTime':
                setEndTime(value);
                break;
        }
    }

    function addTodoHandler() {
        addTodo({
            title,
            description,
            startTime,
            endTime,
        })
    }
}