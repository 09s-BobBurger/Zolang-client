import React from 'react';
import Chart from "./Chart.jsx";

const Overview = () => {
    return (
        <div className="overview-content">
        <Chart
            title="CPU allocation"
            values={[
                {name: 'Requests', value: 1.34},
                {name: 'Limits', value: 0.25}
            ]}
            fullValue={2.00}
        />
        </div>
    );
};

export default Overview;