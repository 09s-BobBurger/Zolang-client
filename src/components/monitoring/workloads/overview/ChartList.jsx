import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import axios from "axios";

function ChartList(props) {
    const [run, setRun] = useState([]);
    const colors = [
        "#66c434",
        "orange",
        "#4cbcff",
        "#c847c3",
        "#e1c720",
        "#ff5f5f",
        "#5050ff",
    ];
    useEffect(() => {
        axios
            .get("#")
            .then((response) => {
                // setRun(response.data);
                setRun([
                    {
                        pod: {
                            counts: 18,
                            running: 10,
                        },
                        deployment: {
                            counts: 9,
                            running: 9,
                        },
                        replicaSet: {
                            counts: 51,
                            running: 46,
                        },
                        statefulSet: {
                            counts: 1,
                            running: 1,
                        },
                        daemonSet: {
                            counts: 2,
                            running: 1,
                        },
                        job: {
                            counts: 0,
                            running: 0,
                        },
                        cronJob: {
                            counts: 0,
                            running: 0,
                        },
                    },
                ]);
            })
            .catch((error) => {
                console.error("Error fetching node data:", error);
            });
    }, []);

    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                height: "auto",
                overflow: "auto",
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    padding: "10px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "15px",
                    justifyContent: "space-between",
                    display: "flex",
                }}
            >
                <span
                    style={{
                        paddingTop: "10px",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Workloads State
                </span>
            </div>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                    marginBottom: "15px",
                }}
            />
            <div className="moni-workloads-table" style={{ overflow: "auto" }}>
                {/* <Grid container spacing={2}>
                    {" "}
                    // 창 크기에 따라 2줄 기본에서 3~4줄 표현
                    {run.map((row) =>
                        Object.keys(row).map(
                            (key, innerIndex) =>
                                row[key].counts > 0 && (
                                    <Box key={innerIndex} flexGrow={1}>
                                        <PieChart
                                            title={key}
                                            running={row[key].running}
                                            counts={row[key].counts}
                                            color={colors[innerIndex]}
                                        />
                                    </Box>
                                )
                        )
                    )}
                </Grid> */}
                <Stack
                    direction="row"
                    textAlign="center"
                    spacing={2}
                    margin="10px"
                >
                    {run.map((row) =>
                        Object.keys(row).map(
                            (key, innerIndex) =>
                                row[key].counts > 0 && (
                                    <Box key={innerIndex} flexGrow={1}>
                                        <PieChart
                                            title={key}
                                            running={row[key].running}
                                            counts={row[key].counts}
                                            color={colors[innerIndex]}
                                        />
                                    </Box>
                                )
                        )
                    )}
                </Stack>
            </div>
        </div>
    );
}

export default ChartList;
