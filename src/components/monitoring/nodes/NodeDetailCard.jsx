import React, { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Typography, Box } from "@mui/material";
import Chart from "./Chart";
import KeyboardArrowLeft from "../../icon/KeyboardArrowLeft.jsx";
import MuiButton from "@mui/material/Button";

function NodeDetailCard({ node, setNode }) {
    function getTimeDiff(timeString) {
        const currentTime = new Date();
        const targetTime = new Date(timeString);
        const diff = Math.floor((currentTime - targetTime) / (1000 * 60));
        return `${diff}분 전`;
    }
    const titleStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        color: "#ffffff",
        fontSize: "1.6rem"
    }
    const allocatableKeys = Object.keys(node.allocatable);
    const capacityKeys = Object.keys(node.capacity);

    const commonKeys = allocatableKeys.filter((key) =>
        capacityKeys.includes(key)
    );
    function parseValueWithUnit(valueString) {
        // 숫자와 단위를 추출합니다.
        const match = valueString.match(/([0-9.]+)\s*(\w+)?/);
        if (!match) {
            // 일반적인 형식이 아니라면 바로 parseFloat를 사용하여 변환합니다.
            return parseFloat(valueString);
        }
        const numericValue = parseFloat(match[1]);
        const unit = match[2] ? match[2].toLowerCase() : null;
        // 단위에 따라 값을 변환하여 반환합니다.
        switch (unit) {
            case "kb":
                return numericValue * 1024;
            case "mb":
                return numericValue * 1024 * 1024;
            case "gb":
                return numericValue * 1024 * 1024 * 1024;
            case "ki":
                return numericValue * 1024; // KiB를 KB로 변환합니다.
            default:
                // 단위가 없거나 인식할 수 없는 경우에는 그대로 반환합니다.
                return numericValue;
        }
    }

    return (
        <div
            style={{
                width: '79vw',
                display: "flex",
                flexDirection: "column",
                gap: "40px",
            }}
        >
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
                    setNode(false);
                }}
            >
                <KeyboardArrowLeft />
                Return to List
            </MuiButton>
            {/* Node Info Table */}
            <div
                style={{
                    display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        // width: "800px",
                        border: '1px solid rgb(171, 175, 189)',
                        borderRadius: '10px',
                        padding: '30px',
                        background: 'rgb(56, 60, 74)'
                }}
            >
                <span style={titleStyle}>
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}} src="../../../metadata.svg"
                             alt="metadata"/>
                        Metadata
                    </span>
                <div
                    style={{
                        display: "flex",
                        gap: '50px',
                        color: "#ffffff",
                    }}
                >
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Name
                        </Typography>
                        <Typography variant="h6" color="#ff9f4a">
                            {node.name}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Kubelet Version
                        </Typography>
                        <Typography variant="h6" color="#b8ff6a">
                            {node.KubeletVersion}
                        </Typography>
                    </div>
                    <div style={{ marginRight: "5px" }}>
                        <Typography variant="body2" color="#ABAFBD">
                            OS
                        </Typography>
                        <Typography variant="h6">{node.OS}</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Created
                        </Typography>
                        <Typography variant="h6">
                            {node.created.split("T")[0]}
                        </Typography>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            display: "flex",
                            gap: '40px',
                            // justifyContent: "space-between",
                            color: "#ffffff",
                        }}
                    >
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                OS Image
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {node.OSImage}
                            </Typography>
                        </div>
                        <div style={{ marginRight: "5px" }}>
                            <Typography variant="body2" color="#ABAFBD">
                                Internal IP
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {node.addresses[0].address}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Hostname
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {node.name}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Container Runtime
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {node.containerRuntime}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Kernel Version
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {node.kernelVersion}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    flex: "1",
                    display: "flex",
                    gap: "29px",
                    width: "100%",
                    overflow: "auto",
                    paddingBottom: "5px",
                }}
            >
                {commonKeys.map((key, index) => {
                    const allocatableValue = parseValueWithUnit(
                        node.allocatable[key]
                    );
                    const capacityValue = parseValueWithUnit(
                        node.capacity[key]
                    );
                    if (allocatableValue > 0) {
                        return (
                            <Chart
                                key={key}
                                title={key}
                                values={[
                                    {
                                        name: "Allocatable",
                                        value: allocatableValue,
                                    },
                                    {
                                        name: "Capacity",
                                        value: capacityValue,
                                    },
                                ]}
                                fullValue={capacityValue}
                                colors={["#019CF6", "#256CD6"]}
                                number={index % 4}
                            />
                        );
                    }
                })}
            </div>
            {/* Conditions Table */}
            <div
                className="node-detail-card"
                style={{
                    padding: "15px",
                    outline: "1px solid #ABAFBD",
                    borderRadius: "10px",
                    background: "rgb(56, 60, 74)",
                    justifyContent: "center",
                }}
            >
                <TableContainer>
                    <Table aria-label="conditions table">
                        <TableHead>
                            <TableRow>
                                <TableCell>타입</TableCell>
                                <TableCell>상태</TableCell>
                                <TableCell>지난 하트비트 시간</TableCell>
                                <TableCell>지난 상태 전이 시간</TableCell>
                                <TableCell style={{ width: "70px" }}>
                                    Reason
                                </TableCell>
                                <TableCell style={{ width: "150px" }}>
                                    Message
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {node.conditions.map((condition, index) => (
                                <TableRow key={index}>
                                    <TableCell>{condition.type}</TableCell>
                                    <TableCell>{condition.status}</TableCell>
                                    <TableCell>
                                        {getTimeDiff(
                                            condition.lastHeartbeatTime
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {getTimeDiff(
                                            condition.lastTransitionTime
                                        )}
                                    </TableCell>
                                    <TableCell>{condition.reason}</TableCell>
                                    <TableCell>{condition.message}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default NodeDetailCard;
