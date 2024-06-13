import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import './Loading.css';

const LoadingComponent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        const timer = setTimeout(() => {
            setLoading(false);
        }, 35000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loading-container">
            {loading ? (
                <HashLoader color={"#123abc"} loading={loading} size={100} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default LoadingComponent;
