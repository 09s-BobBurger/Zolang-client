import React from 'react';
import Chart from "../../nodes/Chart.jsx";
import {Typography} from "@mui/material";
import Label from "../../nodes/Label.jsx";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Status from "../../../icon/Status.jsx";
import TableBody from "@mui/material/TableBody";

const PodDetail = ({ pod }) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                height: 'auto'
            }}
        >
            {/* Node Info Table */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    gap: '30px 0'
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                        width: "800px",
                    }}
                >
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
                                Name
                            </Typography>
                            <Typography variant="h6" color="#ff9f4a">
                                {pod.metadata.name}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Namespace
                            </Typography>
                            <Typography variant="h6" color="#b8ff6a">
                                {pod.metadata.namespace}
                            </Typography>
                        </div>
                        <div style={{marginRight: "5px"}}>
                            <Typography variant="body2" color="#ABAFBD">
                                Created
                            </Typography>
                            <Typography variant="h6">
                                {pod.metadata.creationTime}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Age
                            </Typography>
                            <Typography variant="h6">
                                {pod.metadata.age}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                UId
                            </Typography>
                            <Typography sx={{mb: 1.5}}>
                                {pod.metadata.uid}
                            </Typography>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#ffffff",
                        }}
                    >
                        <div style={{marginRight: "5px"}}>
                            <Typography variant="body2" color="#ABAFBD">
                                Labels
                            </Typography>
                            <Typography sx={{ width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                {Object.keys(pod.metadata.labels).map((key) => {
                                    return <Label name={key + ":" + pod.metadata.labels[key]}/>
                                })}
                            </Typography>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#ffffff",
                        }}
                    >
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Annotations
                            </Typography>
                            <Typography sx={{ width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                {Object.keys(pod.metadata.annotations).map((key) => {
                                    return <Label name={key + ":" + pod.metadata.annotations[key]}/>
                                })}
                            </Typography>
                        </div>
                    </div>
                </div>
                {/* Resource */}
                <div className="pod-detail-resource"
                     style={{
                         display: 'flex',
                         flexWrap: "wrap",
                         width: '400px',
                         gap: '10px 40px',
                         border: '1px solid rgb(171, 175, 189)',
                         borderRadius: '10px',
                         padding: '30px',
                         background: 'rgb(56, 60, 74)'
                     }}
                >
                    <span style={{width: '100%', color: "#ffffff", fontSize: "1.5rem"}}>Resource</span>
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Node
                        </Typography>
                        <Typography color="#ffffff">
                            {pod.resource.node}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="#ABAFBD" style={{ marginBottom: '5px'}}>
                            Status
                        </Typography>
                        <Status status={pod.resource.status}/>
                    </div>
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            IP
                        </Typography>
                        <Typography color="#ffffff">
                            {pod.resource.ip}
                        </Typography>
                    </div>
                    {pod.resource.priorityClass && <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Priority Class
                        </Typography>
                        <Typography color="#ffffff">
                            {pod.resource.priorityClass}
                        </Typography>
                    </div>}
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Restart Count
                        </Typography>
                        <Typography color="#ffffff">
                            {pod.resource.restartCount}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Service Account
                        </Typography>
                        <Typography color="#ffffff">
                            {pod.resource.serviceAccount}
                        </Typography>
                    </div>
                    {pod.resource.imagePullSecret && <div>
                        <Typography variant="body2" color="#ABAFBD">
                            Image Pull Secret
                        </Typography>
                        <Typography color="#ffffff">
                            {pod.resource.imagePullSecret}
                        </Typography>
                    </div>}
                </div>
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
                                <TableCell sx={{ paddingLeft: '16px !important' }} style={{width: "20%"}}
                                >Type</TableCell>
                                <TableCell align="center" style={{width: "5%"}}>Status</TableCell>
                                <TableCell align="center" style={{width: "10%"}}>Last Probe Time</TableCell>
                                <TableCell align="center" style={{width: "10%"}}>Last Transition Time</TableCell>
                                <TableCell sx={{ paddingLeft: '16px !important'}}>
                                    Reason
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '16px !important'}}>
                                    Message
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pod.conditions.map((condition, index) => (
                                <TableRow key={index}>
                                    <TableCell>{condition.type}</TableCell>
                                    <TableCell align="center">{condition.status}</TableCell>
                                    <TableCell align="center">
                                        {condition.lastProbeTime}
                                    </TableCell>
                                    <TableCell align="center">
                                        {condition.lastTransitionTime}
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

};

export default PodDetail;