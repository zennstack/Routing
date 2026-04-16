import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationGuard = () => {
    const location = useLocation();

    useEffect(() => {
        const isLoggedIn = !!localStorage.getItem('access');
        
        if (isLoggedIn) {
            // Push an extra entry into history to "trap" the back button
            if (window.history.state !== 'trapped') {
                window.history.pushState('trapped', null, window.location.pathname);
            }

            const handlePopState = (event) => {
                // If we detect a popstate while logged in, it means they clicked back
                // Instead of logging out, we just stay on the page and refresh
                window.location.reload();
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [location.pathname]);

    // This component doesn't render anything
    return null;
};

export default NavigationGuard;
