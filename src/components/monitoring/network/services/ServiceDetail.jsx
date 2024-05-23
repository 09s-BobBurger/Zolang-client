import React from 'react';
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import MuiButton from "@mui/material/Button";
import Label from "../../nodes/Label.jsx";
import {Typography} from "@mui/material";

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: "#ffffff",
    fontSize: "1.6rem"
}
const ServiceDetail = ({ service, setService }) => {
    console.log(service);
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
                                {service.metaData.serviceName}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Namespace
                            </Typography>
                            <Typography variant="h6" color="#b8ff6a">
                                {service.metaData.serviceNamespace}
                            </Typography>
                        </div>
                        <div style={{marginRight: "5px"}}>
                            <Typography variant="body2" color="#ABAFBD">
                                Created
                            </Typography>
                            <Typography variant="h6">
                                {service.metaData.serviceTimeStamp}
                            </Typography>
                        </div>
                        <div style={{marginRight: "5px"}}>
                            <Typography variant="body2" color="#ABAFBD">
                                Created
                            </Typography>
                            <Typography variant="h6">
                                {service.metaData.serviceAge}
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
                                {Object.keys(service.metaData.serviceLabels).map((key) => {
                                    return <Label name={key + ":" + service.metaData.serviceLabels[key]}/>
                                })}
                            </Typography>
                        </div>
                    </div>
                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        display: "flex",*/}
                    {/*        justifyContent: "space-between",*/}
                    {/*        color: "#ffffff",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <div style={{marginRight: "5px"}}>*/}
                    {/*        <Typography variant="body2" color="#ABAFBD">*/}
                    {/*            Annotations*/}
                    {/*        </Typography>*/}
                    {/*        <Typography sx={{ width: "700px", display: 'flex', gap: '10px', flexWrap: 'wrap'}}>*/}
                    {/*            {Object.keys(service.metaData.serviceAnnotations).map((key) => {*/}
                    {/*                return <Label name={key + ":" + service.metaData.serviceAnnotations[key]}/>*/}
                    {/*            })}*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
                                        {service.spec.serviceType}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        ClusterIP
                                    </Typography>
                                    <Typography variant="h6">
                                        {service.spec.serviceClusterIp}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        Port
                                    </Typography>
                                    <Typography variant="h6">
                                        {service.spec.servicePort[0]}
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '40px'}}>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        IP Family Policy
                                    </Typography>
                                    <Typography variant="body1">
                                        {service.spec.serviceIpFamilyPolicy}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="#ABAFBD">
                                        IP Families
                                    </Typography>
                                    <Typography variant="h6">
                                        {service.spec.serviceIpFamiles.map((item, idx) =>
                                            <Label name={item} key={idx}/>
                                        )}
                                    </Typography>
                                </div>
                            </div>
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
                    <div
                        style={{
                            display: "flex",
                            gap: '40px',
                            color: "#ffffff",
                        }}
                    >
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Status
                            </Typography>
                            <Typography variant="body1">
                                {service.status.serviceStatus ? service.status.serviceStatus : '-'}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="#ABAFBD">
                                Status Load
                            </Typography>
                            <Typography variant="body1">
                                {service.status.serviceStatusLoad ? service.status.serviceStatusLoad : '-'}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;