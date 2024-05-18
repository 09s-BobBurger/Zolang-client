import React from 'react';
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import MuiButton from "@mui/material/Button";
import Label from "../../nodes/Label.jsx";
import {Typography} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: "#ffffff",
    fontSize: "1.6rem"
}
const ServiceDetail = ({ service, setService }) => {
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
                onClick={() => {setService(false)}}
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
                                {service.metadata.name}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Namespace
                            </Typography>
                            <Typography variant="h6" color="#b8ff6a">
                                {service.metadata.namespace}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Resource Version
                            </Typography>
                            <Typography variant="h6">
                                {service.metadata.resourceVersion}
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
                                {service.metadata.creationTimestamp}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                UId
                            </Typography>
                            <Typography sx={{mb: 1.5}}>
                                {service.metadata.uid}
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
                                {Object.keys(service.metadata.labels).map((key) => {
                                    return <Label name={key + ":" + service.metadata.labels[key]}/>
                                })}
                            </Typography>
                        </div>
                    </div>
                </div>

                {/* Spec */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        border: '1px solid rgb(171, 175, 189)',
                        borderRadius: '10px',
                        padding: '30px',
                        background: 'rgb(56, 60, 74)',
                        color: 'white'
                    }}
                >
                    <span style={titleStyle}>
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../spec.svg" alt="spec"/>
                        Spec
                    </span>
                    <div style={{ display: 'flex', gap: '40px'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '50%'}}>
                            <div style={{ display: 'flex', gap: '40px'}}>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Type
                                    </Typography>
                                    <Typography variant="h6">
                                        {service.spec.type}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        ClusterIP
                                    </Typography>
                                    <Typography variant="h6">
                                        {service.spec.clusterIP}
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '40px'}}>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Session Affinity
                                    </Typography>
                                    <Typography variant="body1">
                                        {service.spec.sessionAffinity}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        IP Family Policy
                                    </Typography>
                                    <Typography variant="body1">
                                        {service.spec.ipFamilyPolicy}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Internal Traffic Policy
                                    </Typography>
                                    <Typography variant="body1">
                                        {service.spec.internalTrafficPolicy}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <Typography variant="body2" color="#ABAFBD">
                                    IP Families
                                </Typography>
                                <Typography variant="h6">
                                    {service.spec.ipFamilies.map((item, idx) =>
                                        <Label name={item} key={idx}/>
                                    )}
                                </Typography>
                            </div>
                        </div>

                        <div
                            className="node-detail-card"
                            style={{
                                width: '50%',
                                // padding: "30px",
                                flexDirection: 'column',
                                // outline: "1px solid #ABAFBD",
                                // borderRadius: "10px",
                                // background: "#2E3240",
                                justifyContent: "center",
                            }}
                        >
                            <TableContainer sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}>
                            <span style={{
                                color: 'white',
                                fontSize: '1.3rem',
                            }}>
                                Ports
                            </span>
                                <Table aria-label="conditions table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ paddingLeft: '16px !important' }} style={{width: "20%"}}
                                            >Name</TableCell>
                                            <TableCell align="center" style={{width: "5%"}}>Protocol</TableCell>
                                            <TableCell align="center" style={{width: "10%"}}>Port</TableCell>
                                            <TableCell align="center" style={{width: "10%"}}>Target Port</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {service.spec.ports.map((port, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{port.name}</TableCell>
                                                <TableCell align="center">{port.protocol}</TableCell>
                                                <TableCell align="center">{port.port}</TableCell>
                                                <TableCell align="center">{port.targetPort}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                </div>

                {/* Status */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        border: '1px solid rgb(171, 175, 189)',
                        borderRadius: '10px',
                        padding: '30px',
                        background: 'rgb(56, 60, 74)'
                    }}
                >
                    <span style={titleStyle}>
                        <img width="30px" style={{ marginRight: '10px', marginBottom: '5px'}} src="../../../status.svg" alt="status"/>
                        Status
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;