import React from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import Label from "../../nodes/Label.jsx";

const DeploymentsList = ({ deployments, setDeployment }) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const onClickRow = (deploymentName) => {
        axios
            .get(`/api/v1/cluster/${clusterId}/deployment/${deploymentName}`,
                {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                })
            .then((res) => {
                setDeployment(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                overflow: "auto",
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    padding: "10px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "15px",
                    justifyContent: "space-between",
                    display: "flex",
                }}
            >
                        <span
                            style={{
                                paddingTop: "10px",
                                fontSize: "24px",
                                fontWeight: "bold",
                            }}
                        >
                            List
                        </span>
            </div>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                    marginBottom: "15px",
                }}
            />

            {/*<div className="moni-dashboard-nodes" style={{width: '78vw'}}>*/}
            {/*    <TableContainer>*/}
            {/*        <Table*/}
            {/*            sx={{minWidth: 650, color: "#ffffff"}}*/}
            {/*            aria-label="simple table"*/}
            {/*        >*/}
            {/*            <TableHead>*/}
            {/*                <TableRow>*/}
            {/*                    <TableCell>*/}
            {/*                        Name*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="center">*/}
            {/*                        Namespace*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="left">*/}
            {/*                        Labels*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="center">*/}
            {/*                        Cluster IP*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="center">*/}
            {/*                        External IP*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="center">*/}
            {/*                        Port*/}
            {/*                    </TableCell>*/}
            {/*                    <TableCell align="center">*/}
            {/*                        Age*/}
            {/*                    </TableCell>*/}
            {/*                </TableRow>*/}
            {/*            </TableHead>*/}
            {/*            <TableBody>*/}
            {/*                {services.map((service) => (*/}
            {/*                    <TableRow*/}
            {/*                        key={service.serviceName}*/}
            {/*                        onClick={() =>*/}
            {/*                            onClickRow(service.serviceName)*/}
            {/*                        }*/}
            {/*                        sx={{*/}
            {/*                            "&:last-child td, &:last-child th":*/}
            {/*                                {*/}
            {/*                                    border: 0,*/}
            {/*                                },*/}
            {/*                        }}*/}
            {/*                    >*/}
            {/*                        <TableCell*/}
            {/*                            component="th"*/}
            {/*                            scope="row"*/}
            {/*                        >*/}
            {/*                            {service.serviceName}*/}
            {/*                        </TableCell>*/}
            {/*                        <TableCell align="center">*/}
            {/*                            {service.serviceNamespace}*/}
            {/*                        </TableCell>*/}
            {/*                        <TableCell align="center">*/}
            {/*                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>*/}
            {/*                                {Object.keys(service.serviceLabels).slice(0, 3).map((key) => {*/}
            {/*                                    return <Label name={key + ":" + service.serviceLabels[key]}/>*/}
            {/*                                })}*/}
            {/*                                {Object.keys(service.serviceLabels).length > 3 && <Label name="..." />}*/}
            {/*                            </div>*/}
            {/*                        </TableCell>*/}
            {/*                        <TableCell align="center">*/}
            {/*                            {service.serviceClusterIP}*/}
            {/*                        </TableCell>*/}
            {/*                        <TableCell align="center">*/}
            {/*                            {service.serviceExternalIP ? service.serviceExternalIP : '-'}*/}
            {/*                        </TableCell>*/}
            {/*                        <TableCell align="center">*/}
            {/*                            {service.servicePort[0]}*/}
            {/*                        </TableCell>*/}
            {/*                        <TableCell align="center">*/}
            {/*                            {service.serviceAge}*/}
            {/*                        </TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                ))}*/}
            {/*            </TableBody>*/}
            {/*        </Table>*/}
            {/*    </TableContainer>*/}
            {/*</div>*/}
            
        </div>
    );
};

export default DeploymentsList;