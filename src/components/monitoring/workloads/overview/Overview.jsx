import React from 'react';
import DaemonSets from './DaemonSets';
import Deployment from './Deployment';

function Overview(props) {
    return (
        <div>
            <DaemonSets />
            <Deployment />
        </div>
    );
}

export default Overview;