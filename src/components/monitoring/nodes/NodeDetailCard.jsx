import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Typography, Box } from "@mui/material";

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

    return (
        <div
            className="node-detail-card"
            style={{
                maxWidth: "60vw",
                background: "#222634",
            }}
        >
            <Box
                border={1}
                borderRadius={5}
                p={1}
                borderColor="#ff9436"
                backgroundColor="#ca6a16"
            >
                <Typography variant="subtitle">기본 정보</Typography>
            </Box>
            {/* Node Info Table */}
            <TableContainer>
                <Table aria-label="node info table">
                    <TableBody>
                        <TableRow>
                            <TableCell>OS Image</TableCell>
                            <TableCell>{exampleData.OSImage}</TableCell>
                        </TableRow>
                        {exampleData.addresses.map((address, index) => (
                            <TableRow key={index}>
                                <TableCell>{address.type}</TableCell>
                                <TableCell>{address.address}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell>Kubelet Version</TableCell>
                            <TableCell>{exampleData.KubeletVersion}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>OS</TableCell>
                            <TableCell>{exampleData.OS}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Container Runtime</TableCell>
                            <TableCell>
                                {exampleData.containerRuntime}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Created</TableCell>
                            <TableCell>{exampleData.created}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Kernel Version</TableCell>
                            <TableCell>{exampleData.kernelVersion}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{exampleData.name}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {/* Conditions Table */}
            <TableContainer>
                <Table aria-label="conditions table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Last Heartbeat Time</TableCell>
                            <TableCell>Last Transition Time</TableCell>
                            <TableCell>Reason</TableCell>
                            <TableCell>Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exampleData.conditions.map((condition, index) => (
                            <TableRow key={index}>
                                <TableCell>{condition.type}</TableCell>
                                <TableCell>{condition.status}</TableCell>
                                <TableCell>
                                    {getTimeDiff(condition.lastHeartbeatTime)}
                                </TableCell>
                                <TableCell>
                                    {getTimeDiff(condition.lastTransitionTime)}
                                </TableCell>
                                <TableCell>{condition.reason}</TableCell>
                                <TableCell>{condition.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{display: "flex", alignItems: "flex-end"}}>
                <Box
                    border={1}
                    borderRadius={5}
                    p={1}
                    borderColor="#e136ff"
                    backgroundColor="#a016ca"
                >
                    <Typography variant="subtitle">Allocatable</Typography>
                </Box>
                <Typography variant="caption" color="#ABAFBD">
                    : 할당 가능한 자원
                </Typography>
            </div>
            {/* Allocatable Table */}
            <TableContainer>
                <Table aria-label="allocatable table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Allocatable</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(exampleData.allocatable).map(
                            ([key, value]) => (
                                <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                        {key}
                                    </TableCell>
                                    <TableCell>{value}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{display: "flex", alignItems: "flex-end"}}>
            <Box
                border={1}
                borderRadius={5}
                p={1}
                borderColor="#6cff36"
                backgroundColor="#16ca43"
            >
                <Typography variant="subtitle">Capacity</Typography>
            </Box>
            <Typography variant="caption" color="#ABAFBD">
                : 물리적 리소스 양
            </Typography>
            </div>
            {/* Capacity Table */}
            <TableContainer>
                <Table aria-label="capacity table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Capacity</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(exampleData.capacity).map(
                            ([key, value]) => (
                                <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                        {key}
                                    </TableCell>
                                    <TableCell>{value}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default NodeDetailCard;
