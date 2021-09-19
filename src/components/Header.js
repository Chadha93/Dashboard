import * as React from 'react';
import Navbar from './Navbar/Navbar';
import Drawer from './Drawer/Drawer';

export default function Header() {
    return (
        <div>
            <Navbar />
            <Drawer />
        </div>
    )
}
