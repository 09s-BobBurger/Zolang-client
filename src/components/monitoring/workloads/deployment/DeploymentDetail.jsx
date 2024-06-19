import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import useDidMountEffect from "../../../../hooks/useDidMountEffect.js";
import MuiButton from "@mui/material/Button";
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import Typography from "@mui/material/Typography";
import Label from "../../nodes/Label.jsx";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: "#ffffff",
    fontSize: "1.6rem",
}

const textFormatter = (str) => {
    const space = str.replace(/([A-Z])/g, ' $1');
    return space.charAt(0).toUpperCase() + space.slice(1);
}

const timeFormatter = (str) => {
    // 2024. 05. 31. AM 11:41:04
    // 날짜와 시간을 파싱하여 새로운 문자열 생성
    let parts = str.split('. ');

    let timePart = parts[3];
    let [ampm, time] = timePart.split(" ");
    let timeStr;
    if (ampm === "AM"){
        timeStr = time;
    } else {
        let split = time.split(":");
        split[0] = split[0] + 12;
        timeStr = split.join(":")
    }

    let dateString = `${parts[0]}-${parts[1]}-${parts[2]} ${timeStr}`;

    // Date 객체 생성
    let date = new Date(dateString);
    const currentTime = new Date();
    const minutes = Math.floor((currentTime - date) / (1000 * 60));

    // 분 기준으로 들어온 데이터 처리
    const min = minutes % 60;
    const hour = Math.floor(minutes / 60);
    const day = Math.floor(hour / 24);

    if (day > 0) {
        return `${day} day`
    } else if (hour > 0) {
        return `${hour}h ${min}m`;
    } else {
        return `${min}m`;
    }
}

const DeploymentDetail = ({ selectedDeployment, initDeployment}) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const [deployment, setDeployment] = useState();

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/deployments/${selectedDeployment[0]}?namespace=${selectedDeployment[1]}`)
            .then((res) => {
                setDeployment(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useDidMountEffect(() => {
        initDeployment();
    }, [namespace]);

    return (
        <div
            style={{width: '79vw', minWidth: "1100px"}}
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
                    initDeployment()
                }}
            >
                <KeyboardArrowLeft/>
                Return to List
            </MuiButton>

            {deployment && <div
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
                        <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}} src="../../../metadata.svg"
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
                                {deployment.metadata.name}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Namespace
                            </Typography>
                            <Typography variant="h6" color="#b8ff6a">
                                {deployment.metadata.namespace}
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
                                {deployment.metadata.creationDate + " " + deployment.metadata.creationTime}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Age
                            </Typography>
                            <Typography variant="h6">
                                {deployment.metadata.age}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                UId
                            </Typography>
                            <Typography sx={{mb: 1.5}}>
                                {deployment.metadata.uid}
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
                                {
                                    Object.keys(deployment.metadata?.labels || {}).length > 0 ?
                                        Object.keys(deployment.metadata.labels).map((key) => {
                                            return <Label name={key + ":" + deployment.metadata.labels[key]}/>
                                        }) : '-'
                                }
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
                                {
                                    Object.keys(deployment.metadata?.annotations || {}).length > 0 ?
                                        Object.keys(deployment.metadata.annotations).map((key) => {
                                            if (!key.startsWith('kubectl')) {
                                                return <Label name={key + ":" + deployment.metadata.annotations[key]}/>
                                            }}) : '-'
                                }
                            </Typography>
                        </div>
                    </div>
                </div>

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
                    {/* Resource */}
                    {deployment?.resource && <div
                        style={{
                            width: '50%'
                        }}
                    >
                        <span style={titleStyle}>
                            <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}}
                                 src="../../../resource.svg"
                                 alt="resource"/>
                            Resource
                        </span>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                height: 'auto',
                                marginTop: "20px"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    color: "#ffffff",
                                }}
                            >

                                <div style={{display: "flex", gap: "50px"}}>
                                    <div>
                                        <Typography variant="body2" color="#ABAFBD">
                                            Strategy
                                        </Typography>
                                        <Typography sx={{mb: 1.5}}>
                                            {deployment.resource.strategy ? deployment.resource.strategy : '-'}
                                        </Typography>
                                    </div>
                                    {
                                        deployment?.rollingUpdateStrategy &&
                                        <>
                                        <div>
                                            <Typography variant="body2" color="#ABAFBD">
                                                Max Surge
                                            </Typography>
                                            <Typography sx={{mb: 1.5}}>
                                                {deployment.rollingUpdateStrategy.maxSurge ? deployment.rollingUpdateStrategy.maxSurge : '-'}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body2" color="#ABAFBD">
                                                Max Unavailable
                                            </Typography>
                                            <Typography sx={{mb: 1.5}}>
                                                {deployment.rollingUpdateStrategy.maxUnavailable ? deployment.rollingUpdateStrategy.maxUnavailable : '-'}
                                            </Typography>
                                        </div>
                                        </>
                                    }
                                </div>
                                <div
                                    style={{display: "flex", gap: "20px"}}
                                >
                                    <div>
                                        <Typography variant="body2" color="#ABAFBD">
                                            Minimum Preparation Time
                                        </Typography>
                                        <Typography sx={{mb: 1.5}}>
                                            {deployment.resource.minimumPreparationTime}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="body2" color="#ABAFBD">
                                            Revision History Limit
                                        </Typography>
                                        <Typography sx={{mb: 1.5}}>
                                            {deployment.resource.revisionHistoryLimit}
                                        </Typography>
                                    </div>
                                </div>
                                <div style={{marginRight: "5px"}}>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Selector
                                    </Typography>
                                    <Typography sx={{width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                        {
                                            Object.keys(deployment.resource?.selector || {}).length > 0 ?
                                                Object.keys(deployment.resource.selector).map((key) => {
                                                    return <Label name={key + ":" + deployment.resource.selector[key]}/>
                                                }) : '-'
                                        }
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {/* Pod Conditions */}
                    {deployment?.podConditions && <div>
                        <span style={titleStyle}>
                            <img width="30px" style={{marginRight: '10px', marginBottom: '5px'}}
                                 src="../../../status.svg"
                                 alt="resource"/>
                            Pod Conditions
                        </span>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                height: 'auto',
                                marginTop: "20px"
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
                                {
                                    Object.keys(deployment.podConditions).map((key, idx) => {
                                        return (
                                            <div style={{marginRight: "5px"}}>
                                                <Typography variant="body2" color="#ABAFBD">
                                                    {textFormatter(key)}
                                                </Typography>
                                                <Typography variant="h6">
                                                    {deployment.podConditions[key]}
                                                </Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>}
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
                                    <TableCell sx={{paddingLeft: '16px !important'}} style={{width: "15%"}}
                                    >Type</TableCell>
                                    <TableCell align="center" style={{width: "5%"}}>Status</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Update Time</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Transition Time</TableCell>
                                    <TableCell align="center" style={{width: "30%"}} sx={{paddingLeft: '16px !important'}}>
                                        Reason
                                    </TableCell>
                                    <TableCell align="center" style={{width: "30%"}} sx={{paddingLeft: '16px !important'}}>
                                        Message
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {deployment.condition.map((condition, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{condition.type}</TableCell>
                                        <TableCell align="center">{condition.status}</TableCell>
                                        <TableCell align="center">
                                            {condition.lastUpdateTime ? timeFormatter(condition.lastUpdateTime) : '-'}
                                        </TableCell>
                                        <TableCell align="center">
                                            {condition.lastTransitionTime ? timeFormatter(condition.lastTransitionTime) : '-'}
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
            </div>}
        </div>
    );
};

export default DeploymentDetail;