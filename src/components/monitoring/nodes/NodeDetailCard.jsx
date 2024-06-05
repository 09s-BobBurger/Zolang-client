import React, { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import MuiButton from "@mui/material/Button";
import KeyboardArrowLeft from "../../icon/KeyboardArrowLeft";
import { useSelector } from "react-redux";
import { customizedAxios as axios } from "../../../util/customizedAxios.js";
import Status from "../../icon/Status";
import Chart from "./Chart";

function NodeDetailCard({ nodeName, initNode }) {
    const [node, setNode] = useState();
    const [usage, setUsage] = useState();
    const clusterId = useSelector((state) => state.cluster.clusterId);

    const loadUsage = () => {
        axios
            .get(`/api/v1/cluster/${clusterId}/usage/${nodeName}`)
            .then((res) => {
                setUsage(res.data.data[0]);
                console.log(usage);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/nodes/${nodeName}`)
            .then((res) => {
                setNode(res.data.data[0]);
                loadUsage();
            })
            .catch((err) => {
                console.error(err);
            });
    }, [nodeName]);

    function getTimeDiff(timeString) {
        const currentTime = new Date();
        const targetTime = new Date(timeString);
        const diff = Math.floor((currentTime - targetTime) / (1000 * 60));
        return `${diff}분 전`;
    }

    function parseValueWithUnit(valueString) {
        const match = valueString.match(/([0-9.]+)\s*(\w+)?/);
        if (!match) {
            return parseFloat(valueString);
        }
        const numericValue = parseFloat(match[1]);
        const unit = match[2] ? match[2].toLowerCase() : null;
        switch (unit) {
            case "kb":
                return numericValue * 1024;
            case "mb":
                return numericValue * 1024 * 1024;
            case "gb":
                return numericValue * 1024 * 1024 * 1024;
            case "ki":
                return numericValue * 1024;
            default:
                return numericValue;
        }
    }

    const titleStyle = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        color: "#ffffff",
        fontSize: "1.6rem",
    };

    return (
        <div className="dashboard-content">
            <MuiButton
                style={{
                    width: "fit-content",
                    background: "transparent",
                    color: "white",
                    border: "none",
                    marginBottom: "10px",
                    padding: "10px 0",
                    fontSize: "1.1rem",
                }}
                onClick={() => {
                    initNode();
                }}
            >
                <KeyboardArrowLeft />
                Return to List
            </MuiButton>
            {node && (
                <div
                    style={{
                        minWidth: "1100px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                        height: "auto",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            border: "1px solid rgb(171, 175, 189)",
                            borderRadius: "10px",
                            padding: "30px",
                            background: "rgb(56, 60, 74)",
                        }}
                    >
                        <span style={titleStyle}>
                            <img
                                width="30px"
                                style={{
                                    marginRight: "10px",
                                    marginBottom: "5px",
                                }}
                                src="../../../metadata.svg"
                                alt="metadata"
                            />
                            Node Info
                        </span>
                        <div
                            style={{
                                display: "flex",
                                gap: "40px",
                                color: "#ffffff",
                            }}
                        >
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Name
                                </Typography>
                                <Typography
                                    variant="h6"
                                    style={{ color: "#ff9f4a" }}
                                >
                                    {node.name}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Created
                                </Typography>
                                <Typography variant="h6">
                                    {node.created}
                                </Typography>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: "60px",
                                // justifyContent: "space-between",
                                color: "#ffffff",
                            }}
                        >
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    OS Image
                                </Typography>
                                <Typography>{node.osImage}</Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Kubelet Version
                                </Typography>
                                <Typography
                                    variant="h6"
                                    style={{ color: "#b8ff6a" }}
                                >
                                    {node.kubectlVersion}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    OS
                                </Typography>
                                <Typography variant="h6">{node.os}</Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Container Runtime
                                </Typography>
                                <Typography>{node.containerRuntime}</Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Kernel Version
                                </Typography>
                                <Typography>{node.kernelVersion}</Typography>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            border: "1px solid rgb(171, 175, 189)",
                            borderRadius: "10px",
                            padding: "30px",
                            background: "rgb(56, 60, 74)",
                        }}
                    >
                        <span style={titleStyle}>
                            <img
                                width="30px"
                                style={{
                                    marginRight: "10px",
                                    marginBottom: "5px",
                                }}
                                src="../../../metadata.svg"
                                alt="metadata"
                            />
                            Chart
                        </span>
                        {usage && (
                            <div style= {{display: "flex", paddingBottom: "5px",justifyContent: "space-between", flexWrap: "wrap"}}>
                                <Chart
                                    title="CPU"
                                    values={[
                                        {
                                            name: "Allocatable",
                                            value: usage.allocatableCpu,
                                        },
                                        {
                                            name: "Usage",
                                            value: usage.usage.nodeCpuUsage? usage.usage.nodeCpuUsage: 0,
                                        },
                                    ]}
                                    fullValue={usage.capacityCpu}
                                    number={0}
                                />
                                <Chart
                                    title="Memory"
                                    values={[
                                        {
                                            name: "Allocatable",
                                            value: usage.allocatableMemory,
                                        },
                                        {
                                            name: "Usage",
                                            value: usage.usage.nodeMemoryUsage? usage.usage.nodeMemoryUsage: 0,
                                        },
                                    ]}
                                    fullValue={usage.capacityMemory}
                                    number={1}
                                />
                                <Chart
                                    title="Pod"
                                    values={[
                                        {
                                            name: "Capacity",
                                            value: usage.capacityPod,
                                        },
                                        {
                                            name: "Allocatable",
                                            value: usage.allocatablePod,
                                        },
                                    ]}
                                    fullValue={usage.capacityPod}
                                    number={2}
                                />
                            </div>
                        )}
                    </div>
                    {node.addresses && (
                        <div
                            className="node-detail-card"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                border: "1px solid rgb(171, 175, 189)",
                                borderRadius: "10px",
                                padding: "30px",
                                background: "rgb(56, 60, 74)",
                            }}
                        >
                            <TableContainer
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                }}
                            >
                                <span style={titleStyle}>
                                    <img
                                        width="30px"
                                        style={{
                                            marginRight: "10px",
                                            marginBottom: "5px",
                                        }}
                                        src="../../../status.svg"
                                        alt="status"
                                    />
                                    IP
                                </span>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                External DNS
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                External IP
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Hostname
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Internal IP
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Internal DNS
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                {node.addresses.ExternalDNS}
                                            </TableCell>
                                            <TableCell>
                                                {node.addresses.ExternalIP}
                                            </TableCell>
                                            <TableCell>
                                                {node.addresses.Hostname}
                                            </TableCell>
                                            <TableCell>
                                                {node.addresses.InternalIP}
                                            </TableCell>
                                            <TableCell>
                                                {" "}
                                                {node.addresses.InternalDNS}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    )}
                    {node.conditions && (
                        <div
                            className="node-detail-card"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                border: "1px solid rgb(171, 175, 189)",
                                borderRadius: "10px",
                                padding: "30px",
                                background: "rgb(56, 60, 74)",
                            }}
                        >
                            <span style={titleStyle}>
                                <img
                                    width="30px"
                                    style={{
                                        marginRight: "10px",
                                        marginBottom: "5px",
                                    }}
                                    src="../../../metadata.svg"
                                    alt="metadata"
                                />
                                Conditions
                            </span>
                            <TableContainer>
                                <Table
                                    sx={{ minWidth: 650, color: "#ffffff" }}
                                    aria-label="simple table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell
                                                style={{
                                                    width: "10%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Type
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                style={{
                                                    width: "4%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Status
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                style={{
                                                    width: "5%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                LastHeartbeatTime
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                LastTransitionTime
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Message
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    width: "15%",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Reason
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {node.conditions.map(
                                            (condition, idx) => (
                                                <TableRow
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
                                                        {condition.type}
                                                    </TableCell>
                                                    <TableCell
                                                        align="center"
                                                        sx={{
                                                            textAlign:
                                                                "-webkit-center",
                                                        }}
                                                    >
                                                        <Status
                                                            status={
                                                                condition.status
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {getTimeDiff(
                                                            condition.lastHeartbeatTime
                                                        )}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {getTimeDiff(
                                                            condition.lastTransitionTime
                                                        )}
                                                    </TableCell>
                                                    <TableCell
                                                        scope="row"
                                                        component="th"
                                                    >
                                                        {condition.message}
                                                    </TableCell>
                                                    <TableCell
                                                        scope="row"
                                                        component="th"
                                                    >
                                                        {condition.reason}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default NodeDetailCard;
