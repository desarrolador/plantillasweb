import React from 'react';
import { Link } from 'react-router-dom';

function SiteList({ sites }) {
    return (
        <div>
            {sites.map((site) => (
                <div key={site._id}>
                    <Link to={`/edit/${site._id}`}>{site.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default SiteList;
