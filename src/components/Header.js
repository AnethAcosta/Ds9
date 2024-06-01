import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    
    const currentPath = useLocation().pathname;

    const getLinksForPage = useMemo(() => {
        const links = [
            { name: 'Home', path: '/'},
            { name: 'Destinations', path: '/destinations' },
            { name: 'Seasons', path: '/seasons' },
            { name: 'Sign-up', path: '/signup' },
            { name: 'Payment & Booking', path: '/pay_booking'}
        ];

        switch (currentPath) {
            case '/':
                return links.filter(link => link.name !== 'Payment & Booking' && link.name !== 'Home');
            case '/destinations':
                return links.filter(link => link.name !== 'Seasons' && link.name !== 'Sign-up' && link.name !== 'Payment & Booking' );
            case '/seasons':
                return links.filter(link => link.name !== 'Destinations' && link.name !== 'Sign-up' && link.name !== 'Payment & Booking');
            case '/pay_booking':
                return links.filter(link => link.name !== 'Sign-up' && link.name !== 'Destinations' && link.name !== 'Seasons');
            default:
                return [{ name: 'Sign-up', path: '/signup' }];
        }
    }, [currentPath]);

    const renderLinks = () => {
        const numLinks = getLinksForPage.length;

        if (numLinks === 3) {
            return "justify-around";
        } else if (numLinks === 2) {
            return "justify-between";
        } else {
            return "justify-center";
        }
    };

    return (
        <nav className="bg-sage shadow-md p-4">
            <ul className={`flex ${renderLinks()} items-center`}>
                {getLinksForPage.map(link => (
                    <li key={link.path} className="text-lg font-semibold cursor-pointer text-white hover:text-gray-300">
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
