import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import "../../../../styles/MONITORING.css";

function Chart({ title, running, counts, color }) {
    const pieParams = { height: 110, margin: { right: 5 } };

    return (
        <div className="pie-chart-container">
            <PieChart
                series={[
                    {
                        data: [
                            {
                                value: running,
                                color: color ? color : "orange",
                            },
                            {
                                value: counts - running,
                                color: "rgb(225, 225, 226)",
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
