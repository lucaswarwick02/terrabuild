import React from 'react';
import '../css/PublicBuild.css';

function PublicBuild (props) {
    return (
        <div className="publicBuildContainer">
            <p>{props.id}</p>
            <p>{JSON.stringify(props.data)}</p>
        </div>
    );
}

export default PublicBuild;