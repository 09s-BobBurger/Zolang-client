import React from 'react';

const Status = ({ status }) => {
    const color = {
        'running' : 'rgba(96, 173, 32, 0.5)',
        'ready' : 'rgba(202, 234, 75, 0.5)',
        'error' : 'rgba(255, 201, 120, 0.5)',
        'fail' : 'rgba(255, 98, 98, 0.5)',
        'success' : 'rgba(96, 173, 32, 0.5)',
        'true' : 'rgba(96, 173, 32, 0.5)',
        'false' : 'rgba(255, 98, 98, 0.5)',
        'failed' : 'rgba(255, 98, 98, 0.5)',
        'building' : 'rgba(202, 234, 75, 0.5)',
        ' - ' : 'rgba(201,201,201, 0.2)'
    };

    const lowercaseStatus = status? status.toLowerCase() : " - ";
    const style = {
        background: color[lowercaseStatus],
        color: 'white',
        width: '64px',
        height: '22px',
        borderRadius: "4px",
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={style}>
            {lowercaseStatus}
        </div>
    );
};

export default Status;