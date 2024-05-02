import React from "react";
import Chart from "./Chart.jsx";
import Nodes from "./Nodes.jsx";

const Overview = () => {
    return (
        <div className="overview-content">
            <div style={{flex: "1"}}>
                <Chart
                    title="CPU allocation"
                    values={[
                        { name: "Requests", value: 1.34 },
                        { name: "Limits", value: 0.25 },
                    ]}
                    fullValue={2.0}
                />
            </div>
            <div style={{flex: "1"}}> 
            <Nodes />
            </div>
        </div>
    );
};

export default Overview;
