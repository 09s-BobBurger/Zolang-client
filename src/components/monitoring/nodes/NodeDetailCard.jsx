import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Typography, Box } from "@mui/material";
import Chart from "./Chart";

function NodeDetailCard({ name }) {
    function getTimeDiff(timeString) {
        const currentTime = new Date();
        const targetTime = new Date(timeString);
        const diff = Math.floor((currentTime - targetTime) / (1000 * 60));
        return `${diff}분 전`;
    }

    const exampleData = {
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
    };
    const allocatableKeys = Object.keys(exampleData.allocatable);
    const capacityKeys = Object.keys(exampleData.capacity);

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
            case 'kb':
                return numericValue * 1024;
            case 'mb':
                return numericValue * 1024 * 1024;
            case 'gb':
                return numericValue * 1024 * 1024 * 1024;
            case 'ki':
                return numericValue * 1024; // KiB를 KB로 변환합니다.
            default:
                // 단위가 없거나 인식할 수 없는 경우에는 그대로 반환합니다.
                return numericValue;
        }
    }
    

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
            }}
        >
            {/* Node Info Table */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    width: "700px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#ffffff",
                    }}
                >
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Name
                        </Typography>
                        <Typography variant="h6" color="#ff9f4a">
                            {exampleData.name}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Kubelet Version
                        </Typography>
                        <Typography variant="h6" color="#b8ff6a">
                            {exampleData.KubeletVersion}
                        </Typography>
                    </div>
                    <div style={{ marginRight: "5px" }}>
                        <Typography variant="body2" color="#ABAFBD">
                            OS
                        </Typography>
                        <Typography variant="h6">{exampleData.OS}</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Created
                        </Typography>
                        <Typography variant="h6">
                            {exampleData.created.split("T")[0]}
                        </Typography>
                    </div>
                </div>
                <div>
                    {/* <Box
                    border={1}
                    borderRadius={2}
                    p={1}
                    paddingRight="15px"
                    paddingLeft="15px"
                    borderColor="#ff9436"
                    backgroundColor="#ca6a16"
                    width="fit-content"
                >
                    <Typography variant="subtitle" color="#ffffff"></Typography>
                </Box> */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#ffffff",
                        }}
                    >
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                OS Image
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {exampleData.OSImage}
                            </Typography>
                        </div>
                        <div style={{ marginRight: "5px" }}>
                            <Typography variant="body2" color="#ABAFBD">
                                Internal IP
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {exampleData.addresses[0].address}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Hostname
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {exampleData.name}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Container Runtime
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {exampleData.containerRuntime}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Kernel Version
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {exampleData.kernelVersion}
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
                }}
            >
                {commonKeys.map((key, index) => {
                    const allocatableValue = parseValueWithUnit(
                        exampleData.allocatable[key]
                    );
                    const capacityValue = parseValueWithUnit(
                        exampleData.capacity[key]
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
                    background: "#2E3240",
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
                            {exampleData.conditions.map((condition, index) => (
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
