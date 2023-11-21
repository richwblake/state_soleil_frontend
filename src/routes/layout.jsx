import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div id='layout'>
            <h1>navbar</h1>
            <Outlet />
            <h1>footer</h1>
        </div>
    );
}

