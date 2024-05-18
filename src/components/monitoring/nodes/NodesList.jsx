import React, { useState, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import Drawer from "@mui/material/Drawer";
import NodeDetailCard from "./NodeDetailCard";
import axios from "axios";

function Nodes({namespace, nodeData, setNode}) {
    const handleRowClick = (node) => {
        // setNode(node);
        setNode({
            allocatable: {
                cpu: "10",
                "ephemeral-storage": "56403987978",
                "hugepages-1Gi": "0",
                "hugepages-2Mi": "0",
                "hugepages-32Mi": "0",
                "hugepages-64Ki": "0",
                memory: "7926968Ki",
                pods: "110",
            },
            OSImage: "Docker Desktop",
            addresses: [
                {
                    type: "InternalIP",
                    address: "192.168.65.3",
                },
                {
                    type: "Hostname",
                    address: "docker-desktop",
                },
            ],
            KubeletVersion: "v1.29.1",
            OS: "linux",
            containerRuntime: "docker://25.0.3",
            created: "2024-03-20T14:26:36Z",
            kernelVersion: "6.6.12-linuxkit",
            name: "docker-desktop",
            conditions: [
                {
                    type: "MemoryPressure",
                    status: "False",
                    lastHeartbeatTime: "2024-05-02T07:10:29Z",
                    lastTransitionTime: "2024-03-20T14:26:36Z",
                    reason: "KubeletHasSufficientMemory",
                    message: "kubelet has sufficient memory available",
                },
                {
                    type: "DiskPressure",
                    status: "False",
                    lastHeartbeatTime: "2024-05-02T07:10:29Z",
                    lastTransitionTime: "2024-03-20T14:26:36Z",
                    reason: "KubeletHasNoDiskPressure",
                    message: "kubelet has no disk pressure",
                },
                {
                    type: "PIDPressure",
                    status: "False",
                    lastHeartbeatTime: "2024-05-02T07:10:29Z",
                    lastTransitionTime: "2024-03-20T14:26:36Z",
                    reason: "KubeletHasSufficientPID",
                    message: "kubelet has sufficient PID available",
                },
                {
                    type: "Ready",
                    status: "True",
                    lastHeartbeatTime: "2024-05-02T07:10:29Z",
                    lastTransitionTime: "2024-03-20T14:26:37Z",
                    reason: "KubeletReady",
                    message: "kubelet is posting ready status",
                },
            ],
            capacity: {
                cpu: "10",
                "ephemeral-storage": "61202244Ki",
                "hugepages-1Gi": "0",
                "hugepages-2Mi": "0",
                "hugepages-32Mi": "0",
                "hugepages-64Ki": "0",
                memory: "8029368Ki",
                pods: "110",
            },
        })
    };
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
                    List
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

            <div className="moni-dashboard-nodes">
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">
                                    Kubelet Version
                                </TableCell>
                                <TableCell align="center">Created</TableCell>
                                <TableCell align="center">Ready</TableCell>
                                <TableCell align="center">CPU</TableCell>
                                <TableCell align="center">Memory</TableCell>
                                <TableCell align="center">Pods</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodeData.map((node) => (
                                <TableRow
                                    key={node.name}
                                    onClick={() => handleRowClick(node.name)}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {node.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {node.KubeletVersion}
                                    </TableCell>
                                    <TableCell align="center">
                                        {node.created}
                                    </TableCell>
                                    <TableCell align="center">
                                        {node.ready}
                                    </TableCell>
                                    <TableCell align="center">
                                        {node.capacity["capacity-cpu"]}
                                    </TableCell>
                                    <TableCell align="center">
                                        {node.capacity["capacity-memory"]}
                                    </TableCell>
                                    <TableCell align="center">
                                        {node.capacity["capacity-pods"]}
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

export default Nodes;
