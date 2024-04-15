import React from 'react';

const Status = ({ status }) => {
    const color = {
        'Running' : 'rgba(96, 173, 32, 0.5)',
        'Ready' : 'rgba(202, 234, 75, 0.5)',
        'Error' : 'rgba(255, 201, 120, 0.5)',
        'Fail' : 'rgba(255, 98, 98, 0.5)',
        'Success' : 'rgba(96, 173, 32, 0.5)',
    }
    const style = {
        background: color[status],
        color: 'white',
        width: '64px',
        height: '22px',
        borderRadius: "4px",
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div style={style}>
            {status}
        </div>
    );
};

export default Status;