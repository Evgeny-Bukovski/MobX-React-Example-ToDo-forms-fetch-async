import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {store} from '../../store/index';

import {Item} from "../../components/Item";
import {CreateItem} from "../../components/CreateItem";

export const ItemList = observer(
    () => {
        useEffect(() => {
            console.log('ItemList', 'Mount');

            return () => {
                console.log('ItemList', 'UNMount');
            }
        }, []);

        console.log('ItemList', 'Render');

        return (
            <div>
                {
                    store.map(listMap)
                }
                <CreateItem/>
            </div>
        );

        function listMap(item) {
            return <Item {...item}/>
        }
    }
);