import React, {useEffect, useState} from 'react';
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import MuiButton from "@mui/material/Button";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import Label from "../../nodes/Label.jsx";
import Status from "../../../icon/Status.jsx";
import MiniUsageChart from "../../MiniUsageChart.jsx";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: "#ffffff",
    fontSize: "1.6rem"
}
const ReplicaSetDetail = ({ replicaSetName, initReplicaSet}) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const [replicaSet, setReplicaSet] = useState();

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/replicas/${replicaSetName}`)
            .then((res) => {
                setReplicaSet(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div
            style={{width: '79vw'}}
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
                onClick={() => {
                    initReplicaSet()
                }}
            >
                <KeyboardArrowLeft/>
                Return to List
            </MuiButton>

            {
                replicaSet &&
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                        height: 'auto'
                    }}
                >
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
                                    {replicaSet.metadata.name}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Namespace
                                </Typography>
                                <Typography variant="h6" color="#b8ff6a">
                                    {replicaSet.metadata.namespace}
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
                                    {replicaSet.metadata.creationDate + " " + replicaSet.metadata.creationTime}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Age
                                </Typography>
                                <Typography variant="h6">
                                    {replicaSet.metadata.age}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    UId
                                </Typography>
                                <Typography sx={{mb: 1.5}}>
                                    {replicaSet.metadata.uid}
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
                                    {Object.keys(replicaSet.metadata.labels).map((key) => {
                                        return <Label name={key + ":" + replicaSet.metadata.labels[key]}/>
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
                                    {Object.keys(replicaSet.metadata.annotations).map((key) => {
                                        if (replicaSet.metadata.annotations[key].length < 1000) {
                                            return <Label name={key + ":" + replicaSet.metadata.annotations[key]}/>
                                        }
                                    })}
                                </Typography>
                            </div>
                        </div>
                    </div>

                    {/* Resource */}
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}} src="../../../resource.svg"
                             alt="resource"/>
                        Resource
                    </span>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                height: 'auto'
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
                                        Image
                                    </Typography>
                                    <Typography sx={{mb: 1.5}}>
                                        <Label name={replicaSet.resource.image}/>
                                    </Typography>
                                </div>
                                <div style={{marginRight: "5px"}}>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Selector
                                    </Typography>
                                    <Typography sx={{width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                        {Object.keys(replicaSet.resource.selector).map((key) => {
                                            return <Label name={key + ":" + replicaSet.resource.selector[key]}/>
                                        })}
                                    </Typography>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* podConditions */}
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}} src="../../../resource.svg"
                             alt="resource"/>
                        Pod Conditions
                    </span>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                height: 'auto'
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
                                <div style={{marginRight: "5px"}}>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Running Pods
                                    </Typography>
                                    <Typography variant="h6">
                                        {replicaSet.podConditions.runningPods}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Desired Pods
                                    </Typography>
                                    <Typography variant="h6">
                                        {replicaSet.podConditions.desiredPods}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pods Table */}
                    { replicaSet.pods.length > 0 &&
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
                            Pods
                        </span>
                                <Table
                                    sx={{minWidth: 650, color: "#ffffff"}}
                                    aria-label="simple table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Name
                                            </TableCell>
                                            <TableCell align="center">
                                                Namespace
                                            </TableCell>
                                            <TableCell align="center">
                                                Images
                                            </TableCell>
                                            <TableCell align="left">
                                                Labels
                                            </TableCell>
                                            <TableCell align="center">
                                                Node
                                            </TableCell>
                                            <TableCell align="center">
                                                Status
                                            </TableCell>
                                            <TableCell align="center">
                                                Restart Count
                                            </TableCell>
                                            <TableCell align="center">
                                                CPU Usage(cores)
                                            </TableCell>
                                            <TableCell align="center">
                                                Memory Usage(bytes)
                                            </TableCell>
                                            <TableCell align="center">
                                                Age
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {replicaSet.pods.map(pod => (
                                            <TableRow
                                                key={pod.name}
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
                                                    {pod.name}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {pod.namespace}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                                        {pod.images.map((image) => {
                                                            return <Label name={image}/>
                                                        })}
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                                        {Object.keys(pod.labels).map((key) => {
                                                            return <Label name={key + ":" + pod.labels[key]}/>
                                                        })}
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center">
                                                    {pod.node}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Status status={pod.status}/>
                                                </TableCell>
                                                <TableCell align="center">
                                                    {pod.restartCount}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <MiniUsageChart data={pod.metrics.filter(i => i).map(i => i.cpuUsage)}
                                                                    color1="#f8fc00"
                                                                    color2="#b0b300"/>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <MiniUsageChart data={pod.metrics.filter(i => i).map(i => i.memoryUsage)}
                                                                    color1="#00bbff"
                                                                    color2="#00729c"/>
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                >
                                                    {pod.age}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    }

                    {/*  Serivces  */}
                    {
                        replicaSet.services.length > 0 &&
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
                            Services
                        </span>
                                <Table
                                    sx={{minWidth: 650, color: "#ffffff"}}
                                    aria-label="simple table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Name
                                            </TableCell>
                                            <TableCell align="center">
                                                Namespace
                                            </TableCell>
                                            <TableCell align="left">
                                                Labels
                                            </TableCell>
                                            <TableCell align="center">
                                                Cluster IP
                                            </TableCell>
                                            <TableCell align="center">
                                                External IP
                                            </TableCell>
                                            <TableCell align="center">
                                                Port
                                            </TableCell>
                                            <TableCell align="center">
                                                Age
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {replicaSet.services.map(service => (
                                            <TableRow
                                                key={service.serviceName}
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
                                                    {service.serviceName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {service.serviceNamespace}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                                        {Object.keys(service.serviceLabels).map((key) => {
                                                            return <Label name={key + ":" + service.serviceLabels[key]}/>
                                                        })}
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center">
                                                    {service.serviceClusterIP}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {service.serviceExternalIP ? service.serviceExternalIP : '-'}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {service.servicePort[0]}
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                >
                                                    {service.serviceAge}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    }

                </div>
            }
        </div>
    );
};

export default ReplicaSetDetail;