import React from "react";
import Chart from "./Chart.jsx";
import InnerNodes from "./InnerNodes.jsx";
import Pods from "./Pods.jsx";

const Overview = () => {
    return (
        <div className="overview-content">
            <div style={{
                display: "flex",
                gap: "30px",
                height: 'auto',
                width: 'calc((100vw) / 100* 75)',
                overflow: 'scroll',
                overflowY: 'hidden',
                overflowX: 'auto',
            }}>
                <Chart
                    title="CPU allocation"
                    values={[
                        { name: "Requests", value: 1.34 },
                        { name: "Limits", value: 0.25 },
                    ]}
                    fullValue={2.0}
                    colors={['#ff9033', '#ffe046']}
                />
                <Chart
                    title="Memory allocation"
                    values={[
                        { name: "Requests", value: 526.00 },
                        { name: "Limits", value: 404.00 },
                    ]}
                    fullValue={2.0}
                    colors={['#019CF6', '#74ea44']}
                />
                <Chart
                    title="Pods allocation"
                    values={[
                        { name: "Requests", value: 24 },
                        { name: "Limits", value: 100 },
                    ]}
                    fullValue={2.0}
                    colors={['#ff0073', '#ffb994']}
                />
            </div>
            <div style={{flex: "1"}}> 
            <Pods />
            </div>
            <div style={{flex: "1"}}> 
            <InnerNodes />
            </div>
        </div>
    );
};

export default Overview;
