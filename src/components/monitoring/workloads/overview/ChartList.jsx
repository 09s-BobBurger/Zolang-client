import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { customizedAxios as axios } from "../../../../util/customizedAxios.js";
import { useSelector } from "react-redux";

function ChartList(props) {
    const [runState, setRunState] = useState({});
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);
    const colors = [
        "#66c434",
        "orange",
        "#4cbcff",
        "#c847c3",
        "#e1c720",
        "#ff5f5f",
        "#5050ff",
    ];

    const loadData = () => {
        if (namespace === "All") {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/overview`)
                .then((response) => {
                    console.log(response);
                    setRunState(response.data.data);
                })
                .catch((error) => {
                    console.error("Error fetching node data:", error);
                });
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/overview/namespace?namespace=${namespace}`)
                .then((res) => {
                    console.log(res);
                    setRunState(res.data.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

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
                <Stack
                    direction="row"
                    textAlign="center"
                    spacing={2}
                    margin="10px"
                >
                    {Object.entries(runState).map(([key, value], index) =>
                        value.counts > 0 && (
                            <Box key={index} flexGrow={1}>
                                <PieChart
                                    title={key}
                                    running={value.running}
                                    counts={value.counts}
                                    color={colors[index]}
                                />
                            </Box>
                        )
                    )}
                </Stack>
            </div>
        </div>
    );
}

export default ChartList;
