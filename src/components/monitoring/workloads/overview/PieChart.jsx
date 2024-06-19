import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import "../../../../styles/MONITORING.css";

function Chart({ title, running, counts, color }) {
    const pieParams = { height: 110, margin: { right: 5 }, legend: {hidden: true} };
    return (
        <div className="pie-chart-container">
            <PieChart
                series={[
                    {
                        data: [
                            {
                                value: running,
                                label: "Running",
                                color: color ? color : "orange",
                            },
                            {
                                value: counts - running,
                                label: "Not Running",
                                color: "rgba(255, 255, 255, 0.2)",
                            },
                        ],
                        highlightScope: {
                            faded: "global",
                            highlighted: "item",
                        },
                        faded: {
                            innerRadius: 30,
                            additionalRadius: -30,
                            color: "gray",
                        },
                    },
                ]}
                {...pieParams}
            />
            <Typography color="white" margin="10px" align="center">
                {title}
            </Typography>
        </div>
    );
}

export default Chart;
