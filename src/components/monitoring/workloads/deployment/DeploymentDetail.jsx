import React from 'react';
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import MuiButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Label from "../../nodes/Label.jsx";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: "#ffffff",
    fontSize: "1.6rem"
}

const DeploymentDetail = ({ deployment, setDeployment}) => {
    return (
        <div
            style={{ width: '79vw' }}
        >
            {/* list로 가기 버튼 */}
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
                onClick={() => {setDeployment(null)}}
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
                            <Typography sx={{ width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                {Object.keys(deployment.metadata.labels).map((key) => {
                                    return <Label name={key + ":" + deployment.metadata.labels[key]}/>
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
                                {Object.keys(deployment.metadata.annotations).map((key) => {
                                    if (deployment.metadata.annotations[key].length < 1000) {
                                        return <Label name={key + ":" + deployment.metadata.annotations[key]}/>
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
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../resource.svg" alt="resource"/>
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
                                gap: '40px',
                                // justifyContent: "space-between",
                                color: "#ffffff",
                            }}
                        >
                            <div style={{marginRight: "5px"}}>
                                <Typography variant="body2" color="#ABAFBD">
                                    Strategy
                                </Typography>
                                <Typography variant="h6">
                                    {deployment.resource.strategy}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Minimum Preparation Time
                                </Typography>
                                <Typography variant="h6">
                                    {deployment.resource.minimumPreparationTime}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    revisionHistoryLimit
                                </Typography>
                                <Typography sx={{mb: 1.5}}>
                                    {deployment.resource.revisionHistoryLimit}
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
                                    Selector
                                </Typography>
                                <Typography sx={{ width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                    {Object.keys(deployment.resource.selector).map((key) => {
                                        return <Label name={key + ":" + deployment.resource.selector[key]}/>
                                    })}
                                </Typography>
                            </div>
                        </div>
                    </div>

                </div>

                {/* rollingUpdateStrategy */}
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
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../resource.svg" alt="resource"/>
                        Rolling Update Strategy
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
                                    Max Surge
                                </Typography>
                                <Typography variant="h6">
                                    {deployment.rollingUpdateStrategy.maxSurge}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Max Unavailable
                                </Typography>
                                <Typography variant="h6">
                                    {deployment.rollingUpdateStrategy.maxUnavailable}
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
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../resource.svg" alt="resource"/>
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
                                    Total Replicas
                                </Typography>
                                <Typography variant="h6">
                                    {deployment.podConditions.totalReplicas}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Available Replicas
                                </Typography>
                                <Typography variant="h6">
                                    {deployment.podConditions.availableReplicas}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    Updated Replicas
                                </Typography>
                                <Typography variant="h6">
                                    {deployment.podConditions.updatedReplicas}
                                </Typography>
                            </div>
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
                                    <TableCell sx={{ paddingLeft: '16px !important' }}
                                    >Type</TableCell>
                                    <TableCell align="center" style={{width: "5%"}}>Status</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Update Age</TableCell>
                                    <TableCell align="center" style={{width: "10%"}}>Last Transition Age</TableCell>
                                    <TableCell align="left" style={{width: "25%"}} sx={{ paddingLeft: '16px !important'}}>
                                        Reason
                                    </TableCell>
                                    <TableCell align="left" style={{width: "40%"}} sx={{ paddingLeft: '16px !important'}}>
                                        Message
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {deployment.condition.map((condition, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontWeight: 'bold' }}>{condition.type}</TableCell>
                                        <TableCell align="center">{condition.status}</TableCell>
                                        <TableCell align="center">
                                            {condition.lastUpdateAge}
                                        </TableCell>
                                        <TableCell align="center">
                                            {condition.lastTransitionAge}
                                        </TableCell>
                                        <TableCell align="left">
                                            {condition.reason ? condition.reason : '-'}
                                        </TableCell>
                                        <TableCell align="left">
                                            {condition.message ? condition.message : '-'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default DeploymentDetail;