import React from "react";
import Chart from "./Chart.jsx";
import Nodes from "./Nodes.jsx";
import Pods from "./Pods.jsx";

const Overview = () => {
    return (
        <div className="overview-content">
            <div style={{flex: "1", display: "flex", gap: "33px"}}>
                <Chart
                    title="CPU allocation"
                    values={[
                        { name: "Requests", value: 1.34 },
                        { name: "Limits", value: 0.25 },
                    ]}
                    fullValue={2.0}
                />
                <Chart
                    title="Memory allocation"
                    values={[
                        { name: "Requests", value: 526.00 },
                        { name: "Limits", value: 404.00 },
                    ]}
                    fullValue={2.0}
                />
                <Chart
                    title="Pods allocation"
                    values={[
                        { name: "Requests", value: 24 },
                        { name: "Limits", value: 100 },
                    ]}
                    fullValue={2.0}
                />
            </div>
            <div style={{flex: "1"}}> 
            <Pods />
            </div>
            <div style={{flex: "1"}}> 
            <Nodes />
            </div>
        </div>
    );
};

export default Overview;
