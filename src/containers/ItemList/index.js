import React from 'react';
import {observer} from "mobx-react";

import {Item} from "../../components/Item";
import {watcher} from "../../helpers/watcher";
import {getOrderedList} from "../../store";

export const ItemList = watcher(observer(
    () => {
        return (
            <div>
                {
                    renderListWithDate(getOrderedList())
                }
            </div>
        );
    }
), 'ItemList');

function renderListWithDate(list) {
    const listWithDate = [];
    let lastDate;

    list.forEach((item) => {
        const {date, id} = item;

        if (lastDate !== date) {
            lastDate = date;
            listWithDate.push(
                <React.Fragment key={id}>
                    <p>Date {date}</p>
                    <Item {...item}/>
                </React.Fragment>
            );
        } else {
            listWithDate.push(<Item {...item} key={id}/>);
        }
    });

    return listWithDate;
}