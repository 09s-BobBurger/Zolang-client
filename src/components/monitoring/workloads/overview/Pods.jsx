import React, { useState, useEffect } from "react";
import "../../../../styles/MONITORING.css";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import Label from "../../nodes/Label.jsx";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Status from "../../../icon/Status.jsx";
import {useSelector} from "react-redux";
import loginUtil from "../../../../util/login.js";
import UsageLineChart from "../../UsageLineChart.jsx";
import MiniUsageChart from "../../MiniUsageChart.jsx";
import {useNavigate} from "react-router-dom";

function Pods(props) {
    const [podsData, setPodsData] = useState({totalUsage: [], pods: []});
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);
    const navigate = useNavigate();
    const loadData = () => {
        if (namespace === "All") {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/pods`,
                    {
                        headers: {
                            "Authorization": "Bearer " + loginUtil.getAccessToken(),
                        }
                    }
                )
                .then((res) => {
                    setPodsData(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/pods/namespace?namespace=${namespace}`,
                    {
                        headers: {
                            "Authorization": "Bearer " + loginUtil.getAccessToken(),
                        }
                    }
                )
                .then((res) => {
                    setPodsData(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace])
    
    const onClickRow = (podName) => {};
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
                    Pods
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

            <div className="moni-workloads-table">
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: "200px" }}>
                                    Name
                                </TableCell>
                                <TableCell>Namespace</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Labels</TableCell>
                                <TableCell align="center">Node</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Restart</TableCell>
                                <TableCell align="center">CPU</TableCell>
                                <TableCell align="center">Memory</TableCell>
                                <TableCell  align="center">Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {podsData.pods?.length > 0 && podsData.pods.slice(0, 3).map((pod) => (
                                    <TableRow
                                        key={pod.name}
                                        onClick={() => {
                                            navigate('workloads/pods', { state: { name : pod.name } })
                                        }}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {pod.name}
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.namespace}
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.image}
                                        </TableCell>
                                        <TableCell align="center">
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                                {Object.keys(pod.labels).slice(0, 3).map((key) => {
                                                    return <Label name={key + ":" + pod.labels[key]}/>
                                                })}
                                                {Object.keys(pod.labels).length > 3 && <Label name="..." />}
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.node}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Status status={pod.status} />
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.restartCount}
                                        </TableCell>
                                        <TableCell align="center">
                                            <MiniUsageChart data={pod.metrics.map(i => i ? i.cpuUsage : 0)}
                                                            color1="#f8fc00" color2="#b0b300"
                                                            min={0}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <MiniUsageChart data={pod.metrics.map(i => i ? i.memoryUsage : 0)}
                                                            color1="#00bbff" color2="#00729c"
                                                            min={0}
                                            />
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                        >
                                            {pod.age}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Pods;
