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

function Nodes(props) {
    const [nodeData, setNodeData] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        axios.get("#")
            .then(response => {
                // setNodeData(response.data.data);
                setNodeData([
                        {
                            "allocatable": {
                                "allocatable-memory": "7926968Ki",
                                "allocatable-cpu": "10",
                                "allocatable-pods": "110"
                            },
                            "KubeletVersion": "v1.29.1",
                            "created": "2024-03-20T14:26:36Z",
                            "ready": "True",
                            "name": "docker-desktop",
                            "capacity": {
                                "capacity-memory": "8029368Ki",
                                "capacity-pods": "110",
                                "capacity-cpu": "10"
                            }
                        },
                        {
                            "allocatable": {
                                "allocatable-memory": "4096000Ki",
                                "allocatable-cpu": "2",
                                "allocatable-pods": "110"
                            },
                            "KubeletVersion": "v1.29.1",
                            "created": "2024-05-01T12:00:00Z",
                            "ready": "True",
                            "name": "minikube",
                            "capacity": {
                                "capacity-memory": "4096000Ki",
                                "capacity-pods": "110",
                                "capacity-cpu": "2"
                    }
                }
                    ]);
            })
            .catch(error => {
                console.error("Error fetching node data:", error);
            });
    }, []);

    const handleRowClick = (node) => {
        setSelectedNode(node);
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
                    Nodes
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
                    <Table sx={{ minWidth: 650, color: "#ffffff" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Kubelet Version</TableCell>
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
                                    <TableCell align="center">{node.KubeletVersion}</TableCell>
                                    <TableCell align="center">{node.created}</TableCell>
                                    <TableCell align="center">{node.ready}</TableCell>
                                    <TableCell align="center">{node.capacity["capacity-cpu"]}</TableCell>
                                    <TableCell align="center">{node.capacity["capacity-memory"]}</TableCell>
                                    <TableCell align="center">{node.capacity["capacity-pods"]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {selectedNode && (
                <Drawer anchor="right" open={Boolean(selectedNode)} onClose={() => setSelectedNode(null)}>
                    <NodeDetailCard node={selectedNode} />
                </Drawer>
            )}
        </div>
    );
}

export default Nodes;
