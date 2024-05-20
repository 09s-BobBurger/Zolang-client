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
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import MuiButton from '@mui/material/Button';
import UsageLineChart from "../../UsageLineChart.jsx";

const boxStyle = {
    boxSizing: 'border-box',
    minWidth: '250px',
    height: '120px',
    background: 'transparent',
    borderRadius: '10px',
    border: '2.5px solid #ABAFBD',
    color: '#ffffff',
    padding: '15px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}

const boxTitleVariant = "h6";
const boxValueVariant = "body1";

// key 폰트 크기가 value보다 작은 디자인
const KeyValueDesign = ({title, value}) => {
    return (<div>
        <Typography variant="body2" color="#ABAFBD">
            {title}
        </Typography>
        <Typography variant="body1" color="#ffffff">
            {value}
        </Typography>
    </div>)
}

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: "#ffffff",
    fontSize: "1.6rem"
}

const PodDetail = ({ pod, setPod }) => {
    return (
        <div
            style={{ width: '79vw' }}
        >
            <MuiButton
                style={{
                    width: 'fit-content',
                    background: 'transparent',
                    color: 'white',
                    border: 'none',
                    marginBottom: '10px',
                    padding: '10px 0',
                    fontSize: '1.1rem'
                }}
                onClick={() => {setPod(false)}}
            >
                <KeyboardArrowLeft />
                Return to List
            </MuiButton>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    height: 'auto'
                }}
            >
                {/* Usage Charts */}
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        width: '100%'
                    }}
                >
                    <UsageLineChart
                        title="CPU Usage"
                        data={pod.metrics.map(i => i.cpuUsage)}
                        time={pod.metrics.map(i => i.time)}
                        color="#f8fc00"
                        yAxis="CPU(cores)"
                    />
                    <UsageLineChart
                        title="Memory Usage"
                        data={pod.metrics.map(i => i.memoryUsage/(10 ** 6))}
                        time={pod.metrics.map(i => i.time)}
                        color="#00bbff"
                        yAxis="Memory(bytes)"
                        yFormat={(value) => value.toFixed(1).toString() + "Mi"}
                    />
                </div>
                {/* Metadata Table */}
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
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../metadata.svg" alt="metadata"/>
                        Metadata
                    </span>
                    <div
                        style={{
                            display: "flex",
                            gap: '40px',
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
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: '40px',
                            // justifyContent: "space-between",
                            color: "#ffffff",
                        }}
                    >
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
                         boxSizing: 'border-box',
                         display: 'flex',
                         flexWrap: "wrap",
                         gap: '10px',
                         border: '1px solid rgb(171, 175, 189)',
                         borderRadius: '10px',
                         padding: '30px',
                         background: 'rgb(56, 60, 74)',
                         overflowX: 'auto',
                     }}
                >
                    <span style={titleStyle}>
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../resource.svg" alt="resource"/>
                        Resource
                    </span>
                    <div
                        style={{
                            width: 'fit-content'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                width: 'fit-content',
                                gap: '20px',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={boxStyle}>
                                <Typography variant={boxTitleVariant}>
                                    Node
                                </Typography>
                                <Typography variant={boxValueVariant} align="right">
                                    {pod.resource.node}
                                </Typography>
                            </div>
                            <div style={boxStyle}>
                                <Typography variant={boxTitleVariant}>
                                    Status
                                </Typography>
                                <Typography variant={boxValueVariant} align="right">
                                    {pod.resource.status}
                                </Typography>
                            </div>
                            <div style={boxStyle}>
                                <Typography variant={boxTitleVariant} >
                                    IP
                                </Typography>
                                <Typography variant={boxValueVariant} align="right">
                                    {pod.resource.ip}
                                </Typography>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '20px',
                                padding: '20px',
                                background: 'transparent',
                                borderRadius: '10px',
                                justifyContent: 'space-between'
                            }}
                        >
                            <KeyValueDesign title="Priority Class" value={pod.resource.priorityClass ? pod.resource.priorityClass : '-'} />
                            <KeyValueDesign title="Restart Count" value={pod.resource.restartCount} />
                            <KeyValueDesign title="Service Account" value={pod.resource.serviceAccount} />
                            <KeyValueDesign title="Image Pull Secret" value={pod.resource.imagePullSecret ? pod.resource.imagePullSecret : '-'} />
                        </div>
                    </div>

                </div>
                {/* Conditions Table */}
                <div
                    className="node-detail-card"
                    style={{
                        padding: "30px",
                        flexDirection: 'column',
                        outline: "1px solid #ABAFBD",
                        borderRadius: "10px",
                        background: "#2E3240",
                        justifyContent: "center",
                    }}
                >
                    <TableContainer sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <span style={titleStyle}>
                            <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../status.svg" alt="status"/>
                            Conditions
                        </span>
                        <Table aria-label="conditions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ paddingLeft: '16px !important' }} style={{width: "20%"}}
                                    >Type</TableCell>
                                    <TableCell align="center" style={{width: "5%"}}>Status</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Probe Time</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Transition Time</TableCell>
                                    <TableCell align="center" sx={{ paddingLeft: '16px !important'}}>
                                        Reason
                                    </TableCell>
                                    <TableCell align="center" sx={{ paddingLeft: '16px !important'}}>
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
                                            {condition.lastProbeTime ? condition.lastProbeTime : '-'}
                                        </TableCell>
                                        <TableCell align="center">
                                            {condition.lastTransitionTime}
                                        </TableCell>
                                        <TableCell align="center">
                                            {condition.reason ? condition.reason : '-'}
                                        </TableCell>
                                        <TableCell align="center">
                                            {condition.message ? condition.message : '-'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                {/* Controlled */}
                <div
                    style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexWrap: "wrap",
                        gap: '10px',
                        border: '1px solid rgb(171, 175, 189)',
                        borderRadius: '10px',
                        padding: '30px',
                        background: 'rgb(56, 60, 74)',
                        overflowX: 'auto',
                    }}
                >
                    <span style={titleStyle}>
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../controlled.svg" alt="controlled"/>
                        Controlled
                    </span>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0',
                    }}>
                        <div
                             style={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 gap: '20px',
                             }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '50px'
                                }}
                            >
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Name
                                    </Typography>
                                    <Typography variant="h6" color="#ffffff">
                                        {pod.controlled.name}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Kind
                                    </Typography>
                                    <Typography variant="h6" color="#ffffff">
                                        {pod.controlled.kind}
                                    </Typography>
                                </div>
                                <KeyValueDesign title="Replicas" value={pod.controlled.replicas}/>
                                <KeyValueDesign title="Ready Replicas" value={pod.controlled.readyReplicas}/>
                                <KeyValueDesign title="Age" value={pod.controlled.age}/>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '20px'
                                }}
                            >
                                <div style={{marginRight: "5px"}}>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Labels
                                    </Typography>
                                    <Typography sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                        {Object.keys(pod.controlled.labels).map((key) => {
                                            return <Label name={key + ":" + pod.controlled.labels[key]}/>
                                        })}
                                    </Typography>
                                </div>
                                <div style={{marginRight: "5px"}}>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Images
                                    </Typography>
                                    <Typography sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                        {pod.controlled.images.map((item, key) => {
                                            return <Label name={item} key={key}/>
                                        })}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Persistent Volume Claims */}
                <div
                    className="node-detail-card"
                    style={{
                        padding: "30px",
                        flexDirection: 'column',
                        outline: "1px solid #ABAFBD",
                        borderRadius: "10px",
                        background: "#2E3240",
                        justifyContent: "center",
                    }}
                >
                    <TableContainer sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <span style={titleStyle}>
                            <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../persistentVolumeClaim.svg" alt="persistent volume claim"/>
                            Persistent Volume Claims
                        </span>
                        <Table aria-label="conditions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ paddingLeft: '16px !important' }}
                                    >Name</TableCell>
                                    <TableCell align="center">Label</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Volume</TableCell>
                                    <TableCell align="center">Capacity</TableCell>
                                    <TableCell align="center">Access Mode</TableCell>
                                    <TableCell align="center">Storage Class</TableCell>
                                    <TableCell align="center">Creation Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pod.persistentVolumeClaims.map((pvc, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{pvc.name}</TableCell>
                                        <TableCell>
                                            {pvc.labels && Object.keys(pvc.labels).map((key) => {
                                                return <Label name={key + ":" + pod.controlled.labels[key]}/>
                                            })}
                                        </TableCell>
                                        <TableCell align="center">{pvc.status}</TableCell>
                                        <TableCell align="center">{pvc.volume}</TableCell>
                                        <TableCell align="center">{pvc.capacity}</TableCell>
                                        <TableCell align="center">{pvc.accessMode}</TableCell>
                                        <TableCell align="center">{pvc.storageClass}</TableCell>
                                        <TableCell align="center">{pvc.creationTime}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                {/*  Container  */}
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
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../container.svg" alt="container"/>
                        Container
                    </span>

                </div>
            </div>
        </div>
    );

};

export default PodDetail;