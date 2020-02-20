import React, {useState, useEffect} from 'react';
import {ItemList} from "./ItemList";
import {CreateItem} from "../components/CreateItem";

export const customHistory = (setLocation) => {
    return {
        pushState: (url) => {
            console.log('pushState');
            history.pushState(null, null, url);
            setLocation({...location})
        }
    }
};

export function App() {
    return (
        <Router customHistory={customHistory}
                notFound={<div>notFound</div>}
                routes={[
                    {
                        path: '/',
                        component: <>
                            <ItemList/>
                            <CreateItem/>
                        </>
                    },
                    {
                        path: '/task/628328570',
                        component: <div>task 628328570</div>
                    }
                ]}/>
    )
}

function Router({routes, notFound, customHistory}) {
    const [_location, setLocation] = useState(location);

    useEffect(() => {
        customHistory(setLocation);
        locationObserver();
        window.addEventListener('popstate', locationObserver);

        return () => {
            window.removeEventListener('popstate', locationObserver);
        }
    }, []);

    function locationObserver() {
        setLocation({...location})
    }

    for (let i = routes.length; i !== 0; i--) {
        const route = routes[i - 1];
        if (route.path === _location.pathname) {
            return route.component
        }
    }

    return notFound
}