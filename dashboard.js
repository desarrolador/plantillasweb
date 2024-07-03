import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SiteList from './SiteList';

function Dashboard({ token }) {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        const fetchSites = async () => {
            try {
                const response = await axios.get('/api/sites', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSites(response.data);
            } catch (error) {
                console.error('Error fetching sites', error);
            }
        };
        fetchSites();
    }, [token]);

    return (
        <div>
            <h1>Your Sites</h1>
            <SiteList sites={sites} />
        </div>
    );
}

export default Dashboard;
