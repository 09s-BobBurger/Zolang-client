import React from 'react';
import KeyboardArrowLeft from "../../icon/KeyboardArrowLeft.jsx";
import Label from "../nodes/Label.jsx";
import Status from "../../icon/Status.jsx";
import MiniUsageChart from "../MiniUsageChart.jsx";
import TableCell from "@mui/material/TableCell";
import MuiButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
const ControllerDetail = ({ detail, goToList }) => {
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
                    goToList()
                }}
            >
                <KeyboardArrowLeft/>
                Return to List
            </MuiButton>

            {detail && <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    height: 'auto'
                }}
            >
                {/* Metadetail Table */}
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}} src="../../../metadetail.svg"
                             alt="metadetail"/>
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
                                {detail.metadata.name}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Namespace
                            </Typography>
                            <Typography variant="h6" color="#b8ff6a">
                                {detail.metadata.namespace}
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
                                {detail.metadata.creationDate + " " + detail.metadata.creationTime}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Age
                            </Typography>
                            <Typography variant="h6">
                                {detail.metadata.age}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                UId
                            </Typography>
                            <Typography sx={{mb: 1.5}}>
                                {detail.metadata.uid}
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
                                {Object.keys(detail.metadata.labels).map((key) => {
                                    return <Label name={key + ":" + detail.metadata.labels[key]}/>
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
                                {Object.keys(detail.metadata.annotations).map((key) => {
                                    if (detail.metadata.annotations[key].length < 1000) {
                                        return <Label name={key + ":" + detail.metadata.annotations[key]}/>
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
                                    <Label name={detail.resource.image}/>
                                </Typography>
                            </div>
                            <div style={{marginRight: "5px"}}>
                                <Typography variant="body2" color="#ABAFBD">
                                    Selector
                                </Typography>
                                <Typography sx={{width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                    {Object.keys(detail.resource.selector).map((key) => {
                                        return <Label name={key + ":" + detail.resource.selector[key]}/>
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
                                    {detail.podConditions.runningPods}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Desired Pods
                                </Typography>
                                <Typography variant="h6">
                                    {detail.podConditions.desiredPods}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pods Table */}
                {detail.pods.length > 0 && <div
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
                                {detail.pods.map(pod => (
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
                                            <MiniUsageChart data={pod.metrics.map(i => i ? i.cpuUsage : 0)}
                                                            color1="#f8fc00" color2="#b0b300"
                                                            min={0}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <MiniUsageChart data={pod.metrics.map(i => i ? i.memoryUsage : 0)}
                                                            color1="#00bbff" color2="#00729c"
                                                            min={0}
                                            />
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

                {/* Services */}
                {
                    detail.services.length > 0 &&
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
                                    {detail.services.map(service => (
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
            </div>}
        </div>
    );
};

export default ControllerDetail;