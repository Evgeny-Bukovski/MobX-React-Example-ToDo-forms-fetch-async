import React, {useEffect} from 'react';

export function watcher(Component, name) {
    return (props) => {
        useEffect(() => {
            console.log(name, 'Mount');

            return () => {
                console.log(name, 'UNMount');
            }
        }, []);

        console.log(name, 'ReRender');

        return <Component {...props}/>
    }
}