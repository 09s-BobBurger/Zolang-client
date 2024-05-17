import React from 'react';
import Label from "../../nodes/Label.jsx";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const ServicesList = ({ services, setService}) => {
    const onClickRow = () => {
        setService({
            "items": [
                {
                    "metadata": {
                        "name": "kubernetes",
                        "namespace": "default",
                        "uid": "549bff8b-8b1e-4001-bbd7-527830d6dcdc",
                        "resourceVersion": "191",
                        "creationTimestamp": "2024-05-10T06:51:29Z",
                        "labels": {
                            "component": "apiserver",
                            "provider": "kubernetes"
                        },
                    },
                    "spec": {
                        "ports": [
                            {
                                "name": "https",
                                "protocol": "TCP",
                                "port": 443,
                                "targetPort": 443
                            }
                        ],
                        "clusterIP": "10.100.0.1",
                        "clusterIPs": [
                            "10.100.0.1"
                        ],
                        "type": "ClusterIP",
                        "sessionAffinity": "None",
                        "ipFamilies": [
                            "IPv4"
                        ],
                        "ipFamilyPolicy": "SingleStack",
                        "internalTrafficPolicy": "Cluster"
                    },
                    "status": {
                        "loadBalancer": {}
                    }
                }
            ]
        }.items[0]);
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

            <div className="moni-dashboard-nodes" style={{width: '78vw'}}>
                <TableContainer>
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
                                    Type
                                </TableCell>
                                <TableCell align="center">
                                    Cluster IP
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
                            {services.map((service) => (
                                <TableRow
                                    key={service.name}
                                    onClick={() =>
                                        onClickRow()
                                    }
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
                                        {service.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {service.namespace}
                                    </TableCell>
                                    <TableCell align="center">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {Object.keys(service.labels).slice(0, 3).map((key) => {
                                                return <Label name={key + ":" + service.labels[key]}/>
                                            })}
                                            {Object.keys(service.labels).length > 3 && <Label name="..." />}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        {service.type}
                                    </TableCell>
                                    <TableCell align="center">
                                        {service.clusterIP}
                                    </TableCell>
                                    <TableCell align="center">
                                        {service.port}
                                    </TableCell>
                                    <TableCell align="center">
                                        {service.age}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ServicesList;