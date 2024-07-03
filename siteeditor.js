import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemplateEditor from './TemplateEditor';

function SiteEditor({ match, token }) {
    const [site, setSite] = useState(null);

    useEffect(() => {
        const fetchSite = async () => {
            try {
                const response = await axios.get(`/api/sites/${match.params.id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSite(response.data);
            } catch (error) {
                console.error('Error fetching site', error);
            }
        };
        fetchSite();
    }, [match.params.id, token]);

    const handleContentChange = (newContent) => {
        setSite({ ...site, content: newContent });
    };

    const handleSave = async () => {
        try {
            await axios.put(
                `/api/sites/${site._id}`,
                { content: site.content },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Site updated successfully');
        } catch (error) {
            console.error('Error updating site', error);
        }
    };

    if (!site) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Edit {site.name}</h1>
            <TemplateEditor content={site.content} onContentChange={handleContentChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default SiteEditor;
