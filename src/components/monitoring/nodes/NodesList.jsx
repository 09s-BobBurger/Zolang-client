import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import Status from "../../icon/Status";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

function Nodes({ nodeData, setNode }) {
    const handleRowClick = (node) => {
        setNode(node);
    };

    function calculateTime(timestamp) {
        const providedDate = new Date(timestamp);
        const currentTime = new Date();
        const timeDifferenceInMilliseconds = currentTime - providedDate;
        const timeDifferenceInMinutes = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
        return timeDifferenceInMinutes+ "분 전";
    }

    const CpuProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        width: 70,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor:
                theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === "light" ? "#F5347F" : "#308fe8",
        },
    }));

    const MemoryProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        width: 70,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor:
                theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === "light" ? "#ffd05c" : "#308fe8",
        },
    }));

    const convertToPercentage = (value, max) => (value / max) * 100;

    const boxStyle = {
        boxSizing: "border-box",
        minWidth: "200px",
        height: "80px",
        background: "transparent",
        borderRadius: "10px",
        border: "2.5px solid #ABAFBD",
        color: "#ffffff",
        padding: "15px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    const boxTitleVariant = "subtitle";
    const boxValueVariant = "body2";

    return (
        <div className="dashboard-content">
            {nodeData.map((node, index) => (
                <div
                    key={node.name}
                    onClick={() =>
                        handleRowClick(node.name)
                    }
                    style={{
                        padding: "15px",
                        outline: "1px solid #ABAFBD",
                        borderRadius: "10px",
                        background: "#2E3240",
                        justifyContent: "center",
                        height: "auto",
                        minWidth: "1100px"
                    }}
                >
                    <div className="node-list-metadata">
                        <span>
                            {node.name}
                        </span>
                        <div
                            style={{
                                display: "flex",
                                width: "fit-content",
                                gap: "20px",
                                justifyContent: "space-between",
                                marginTop: "10px",
                                marginBottom: "10px"
                            }}
                        >
                            <div style={boxStyle}>
                                <Typography variant={boxTitleVariant}>
                                    Version
                                </Typography>
                                <Typography
                                    variant={boxValueVariant}
                                    align="right"
                                >
                                    {node.kubectlVersion.split("-")[0]}
                                </Typography>
                            </div>
                            <div style={boxStyle}>
                                <Typography variant={boxTitleVariant}>
                                    TimeStamp
                                </Typography>
                                <Typography
                                    variant={boxValueVariant}
                                    align="right"
                                >
                                    {node.timeStamp}
                                </Typography>
                            </div>
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    minWidth: "200px",
                                    height: "80px",
                                    background: "transparent",
                                    borderRadius: "10px",
                                    border: "2.5px solid #ABAFBD",
                                    color: "#ffffff",
                                    padding: "15px 20px",
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant={boxTitleVariant}>
                                        CPU
                                    </Typography>
                                    <CpuProgress
                                        variant="determinate"
                                        value={convertToPercentage(node.nodeUsage.usage.nodeCpuUsage? node.nodeUsage.usage.nodeCpuUsage:0, node.nodeUsage.allocatableCpu)}
                                    />
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant={boxTitleVariant}>
                                        Memory
                                    </Typography>
                                    <MemoryProgress
                                        variant="determinate"
                                        value={convertToPercentage(node.nodeUsage.usage.nodeMemoryUsage? node.nodeUsage.usage.nodeMemoryUsage : 0, node.nodeUsage.allocatableMemory)}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        <TableCell>Type</TableCell>
                                        <TableCell align="center">
                                            Status
                                        </TableCell>
                                        <TableCell align="center">
                                            LastHeartbeatTime
                                        </TableCell>
                                        <TableCell align="center">
                                            LastTransitionTime
                                        </TableCell>
                                        <TableCell align="left">
                                            Message
                                        </TableCell>
                                        <TableCell align="left">
                                            Reason
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {node.conditions.map((condition, idx) => (
                                        <TableRow
                                            key={`${node.name}-${condition.type}-${idx}`}
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
                                            <TableCell align="center">
                                                <Status
                                                    status={condition.status}
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                {calculateTime(
                                                    condition.lastHeartbeatTime
                                                )}
                                            </TableCell>
                                            <TableCell align="center">
                                                {calculateTime(
                                                    condition.lastTransitionTime
                                                )}
                                            </TableCell>
                                            <TableCell scope="row" component="th">
                                                {condition.message}
                                            </TableCell>
                                            <TableCell scope="row" component="th">
                                                {condition.reason}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Nodes;
