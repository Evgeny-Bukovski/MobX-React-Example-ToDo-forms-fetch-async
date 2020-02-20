import React, {useState} from 'react';
import {observer} from "mobx-react";
import {addTodo, removedItems, restoreLastToDo} from "../../store";
import {watcher} from "../../helpers/watcher";

const initialTitle = '';
const initialDescription = '';
const initialDate = '';

export const CreateItem = watcher(observer(() => {
        const [title, setTitle] = useState(initialTitle);
        const [description, setDescription] = useState(initialDescription);
        const [date, setDate] = useState(initialDate);

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

                {/*<input type="datetime-local"*/}
                <input type="text"
                       name="date"
                       value={date}
                       onChange={onChange}/>

                <button onClick={addTodoHandler}>Add task</button>
                {
                    removedItems.length ? <button onClick={restoreLastToDo}>Restore</button> : null
                }
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
                case 'date':
                    setDate(value);
                    break;
            }
        }

        function addTodoHandler() {
            setTitle(initialTitle);
            setDescription(initialDescription);
            setDate(initialDate);

            addTodo({
                title,
                description,
                date,
            })
        }
    }
), 'CreateItem');