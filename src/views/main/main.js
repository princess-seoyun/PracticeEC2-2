import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage() {
    const [mainString, setMainString] = useState('');

    useEffect(() => {
        axios.get('http://54.180.163.81:8082/diary/main')
            .then(response => {
                setMainString(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="main-container">
            <h1>{mainString}</h1>
        </div>
    );
}

export default MainPage;
