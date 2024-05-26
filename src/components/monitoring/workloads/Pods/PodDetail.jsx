import React, {useEffect, useState} from 'react';
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
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

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

const PodDetail = ({ podName, initPod}) => {
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const [pod, setPod] = useState();

    useEffect(() => {
        axios
            .get(
                `/api/v1/cluster/${clusterId}/workload/pods/${podName}`,
                {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                }
            )
            .then((res) => {
                setPod(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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
                onClick={() => {initPod()}}
            >
                <KeyboardArrowLeft />
                Return to List
            </MuiButton>
            {pod && <div
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
                        data={pod.metrics.map(i => i.memoryUsage / (10 ** 6))}
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}} src="../../../metadata.svg"
                             alt="metadata"/>
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
                            <Typography sx={{width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
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
                            <Typography sx={{width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}} src="../../../resource.svg"
                             alt="resource"/>
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
                                <Typography variant={boxTitleVariant}>
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
                            <KeyValueDesign title="Priority Class"
                                            value={pod.resource.priorityClass ? pod.resource.priorityClass : '-'}/>
                            <KeyValueDesign title="Restart Count" value={pod.resource.restartCount}/>
                            <KeyValueDesign title="Service Account" value={pod.resource.serviceAccount}/>
                            <KeyValueDesign title="Image Pull Secret"
                                            value={pod.resource.imagePullSecret ? pod.resource.imagePullSecret : '-'}/>
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
                            <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}}
                                 src="../../../status.svg" alt="status"/>
                            Conditions
                        </span>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{paddingLeft: '16px !important'}} style={{width: "20%"}}
                                    >Type</TableCell>
                                    <TableCell align="center" style={{width: "5%"}}>Status</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Probe Time</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Transition Time</TableCell>
                                    <TableCell align="center" sx={{paddingLeft: '16px !important'}}>
                                        Reason
                                    </TableCell>
                                    <TableCell align="center" sx={{paddingLeft: '16px !important'}}>
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}}
                             src="../../../controlled.svg" alt="controlled"/>
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
                                    <Typography sx={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                        {Object.keys(pod.controlled.labels).map((key) => {
                                            return <Label name={key + ":" + pod.controlled.labels[key]}/>
                                        })}
                                    </Typography>
                                </div>
                                <div style={{marginRight: "5px"}}>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Images
                                    </Typography>
                                    <Typography sx={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
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
                            <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}}
                                 src="../../../persistentVolumeClaim.svg" alt="persistent volume claim"/>
                            Persistent Volume Claims
                        </span>
                        <Table aria-label="conditions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{paddingLeft: '16px !important'}}
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}}
                             src="../../../container.svg" alt="container"/>
                        Container
                    </span>
                    <div
                        style={{
                            display: "flex",
                            gap: '15px',
                            color: "#ffffff",
                            alignItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '8px',
                                background: pod.container.isRunning ? "green" : "red"
                            }}
                        ></div>
                        <Typography variant="h6">
                            {pod.container.name}
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: '40px',
                            color: "#ffffff",
                        }}
                    >
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Image
                            </Typography>
                            <Typography variant="body1">
                                {pod.container.image}
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" color="#EFEFEF">
                            State
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                gap: '40px',
                                color: "#ffffff",
                                marginTop: '10px',
                            }}
                        >
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Ready
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.ready.toString()}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Started
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.started.toString()}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Started At
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.startedAt}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" color="#EFEFEF">
                            Environment Variable
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                gap: '40px',
                                color: "#ffffff",
                                marginTop: '10px',
                            }}
                        >
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Pod Name
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.env[0].value ? pod.containers.env[0].value : '-'}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Pod Namespace
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.env[1].value ? pod.containers.env[1].value : '-'}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" color="#EFEFEF">
                            Factor
                        </Typography>
                        <div
                            style={{
                                backgroundColor: 'rgb(46, 50, 64)',
                                borderRadius: '5px',
                                padding: '15px 25px',
                                marginTop: '10px',
                                color: 'white',
                            }}
                        >
                            {pod.container.factor.map(i => <p style={{margin: '0'}}>{i + '\n'}</p>)}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h6" color="#EFEFEF">
                            Mount
                        </Typography>
                        <TableContainer
                            sx={{
                                marginTop: '10px',
                            }}
                        >
                            <Table aria-label="conditions table"
                                   sx={{
                                       '& .MuiTableCell-root': {
                                           color: 'white',
                                           border: '1px solid #ABAFBD'
                                       },
                                       '& .MuiTableRow-head .MuiTableCell-root': {
                                           color: '#ABAFBD',
                                           backgroundColor: 'rgb(46, 50, 64)'
                                       },
                                   }}
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{paddingLeft: '16px !important', border: '1px solid white'}}
                                        >Name</TableCell>
                                        <TableCell align="center">Read Only</TableCell>
                                        <TableCell align="center">Mount Path</TableCell>
                                        <TableCell align="center">Sub Path</TableCell>
                                        <TableCell align="center">Source Type</TableCell>
                                        <TableCell align="center">Source Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pod.container.mount.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell align="center">
                                                {item.readOnly.toString()}
                                            </TableCell>
                                            <TableCell
                                                align="center">{item.mountPath ? item.mountPath : '-'}</TableCell>
                                            <TableCell align="center">{item.subPath ? item.subPath : '-'}</TableCell>
                                            <TableCell
                                                align="center">{item.sourceType ? item.sourceType : '-'}</TableCell>
                                            <TableCell
                                                align="center">{item.sourceName ? item.sourceName : '-'}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div>
                        <Typography variant="h6" color="#EFEFEF">
                            Security Context
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                gap: '40px',
                                color: "#ffffff",
                                marginTop: '10px',
                            }}
                        >
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Run As User
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.securityContext.runAsUser ? pod.container.securityContext.runAsUser : '-'}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Added Capabilities
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.securityContext.addedCapabilities.join(", ")}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Drop Capabilities
                                </Typography>
                                <Typography variant="body1">
                                    {pod.container.securityContext.dropCapabilities.join(", ")}
                                </Typography>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: '10px 40px',
                                color: "#ffffff",
                                flexWrap: 'wrap',
                                marginTop: '10px'
                            }}
                        >
                            {
                                Object.keys(pod.container.securityContext).slice(3).map(key => {
                                    if (pod.container.securityContext[key]) {
                                        return (
                                            <div>
                                                <Typography variant="body2" color="#ABAFBD">
                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                </Typography>
                                                <Typography variant="body1">
                                                    {pod.container.securityContext[key]}
                                                </Typography>
                                            </div>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );

};

export default PodDetail;