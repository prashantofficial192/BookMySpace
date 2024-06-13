import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import LoadingComponent from './components/Loading/Loading';

const AppWrapper = ({ router }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return loading ? <LoadingComponent /> : <RouterProvider router={router} />;
};

export default AppWrapper;
