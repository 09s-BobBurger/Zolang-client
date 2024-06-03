import React, { useState, useEffect } from 'react';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import "../../styles/MONITORING.css";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Status from "../icon/Status";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { customizedAxios as axios } from "../../util/customizedAxios.js";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
}));
const convertToPercentage = (value, max) => (value / max) * 100;

function calculateTime(timestamp) {
    const providedDate = new Date(timestamp);
    const currentTime = new Date();
    const timeDifferenceInMilliseconds = currentTime - providedDate;
    const timeDifferenceInMinutes = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
    return timeDifferenceInMinutes+ "분 전";
}
function InnerNodes(props) {
    const navigate = useNavigate();
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const [nodeData, setNodeData] = useState([]);

    const loadData = async () => {
        try {
            const res = await axios.get(`/api/v1/cluster/${clusterId}/nodes`);
            const initialNodeData = res.data.data;

            // 각 노드에 대해 추가 데이터를 가져와서 병합
            const updatedNodeDataPromises = initialNodeData.map(async (node) => {
                try {
                    const usageRes = await axios.get(`/api/v1/cluster/${clusterId}/usage/${node.name}`);
                    if (usageRes.data.success) {
                        const updatedNode = { ...node, nodeUsage: usageRes.data.data[0] };
                        return updatedNode;
                    } else {
                        return node;
                    }
                } catch (error) {
                    console.error(`Error fetching usage data for node ${node.name}:`, error);
                    return node;
                }
            });

            const updatedNodeData = await Promise.all(updatedNodeDataPromises);
            setNodeData(updatedNodeData);
        } catch (error) {
            console.error("Error loading initial node data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, [clusterId]);

    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                height: "auto",
                width: "77vw",
                minWidth: "1100px"
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
            <div className="moni-dashboard-nodes"
                style={{
                    width: "100%"
                }}
            >
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Kubectl Version</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">CPU</TableCell>
                                <TableCell align="center">Memory</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nodeData.map((row) => {
                                const readyCondition = row.conditions.find((condition) => condition.type === "Ready");
                                return (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            "&:last-child td, &:last-child th": {
                                                border: 0,
                                            },
                                        }}
                                        onClick={() => {
                                            navigate('nodes', { state: { name : row.name } })
                                        }}
                                    >
                                        <TableCell component="th" scope="row" style={{width: "fit-content"}}>{row.name}</TableCell>
                                        <TableCell align="center">{row.kubectlVersion}</TableCell>
                                        <TableCell align="center"><Status status={readyCondition ? readyCondition.status : null}/></TableCell>
                                        <TableCell align="center">{calculateTime(row.timeStamp)}</TableCell>
                                        <TableCell align="center" style={{width: "10%"}}>
                                        <BorderLinearProgress
                                            variant="determinate"
                                            value={convertToPercentage(row.nodeUsage.usage.nodeCpuUsage? row.nodeUsage.usage.nodeCpuUsage: 0, row.nodeUsage.allocatableCpu)}
                                        />
                                        </TableCell>
                                        <TableCell align="center" style={{width: "10%"}}>
                                        <BorderLinearProgress
                                            variant="determinate"
                                            value={convertToPercentage(row.nodeUsage.usage.nodeMemoryUsage? row.nodeUsage.usage.nodeMemoryUsage:0, row.nodeUsage.allocatableMemory)}
                                        />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default InnerNodes;
