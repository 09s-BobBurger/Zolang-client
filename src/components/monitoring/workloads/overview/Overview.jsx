import React from 'react';
import DaemonSets from './DaemonSets';
import Deployment from './Deployment';
import Pods from './Pods';
import ChartList from './ChartList';

function Overview(props) {
    return (
        <div className="overview-content">
            <ChartList />
            <DaemonSets />
            <Deployment />
            <Pods />
        </div>
    );
}

export default Overview;