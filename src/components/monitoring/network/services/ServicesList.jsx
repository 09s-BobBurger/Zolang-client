import React, {useEffect, useState} from 'react';
import Label from "../../nodes/Label.jsx";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";

const ServicesList = ({ setService}) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const [services, setServices] = useState([]);
    const onClickRow = (serviceName) => {
        setService(serviceName);
    }
    const loadData = () => {
        if (namespace === "All") {
            axios
                .get(`/api/v1/cluster/${clusterId}/network/service`)
                .then((res) => {
                    setServices(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/network/service/namespace?namespace=${namespace}`)
                .then((res) => {
                    setServices(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                minWidth: "1200px"
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

            <div className="moni-dashboard-nodes" style={{width: '100%'}}>
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
                            {services.map((service) => (
                                <TableRow
                                    key={service.serviceName}
                                    onClick={() =>
                                        onClickRow(service.serviceName)
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
                                        {service.serviceName}
                                    </TableCell>
                                    <TableCell align="center">
                                        {service.serviceNamespace}
                                    </TableCell>
                                    <TableCell align="center">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {Object.keys(service.serviceLabels).slice(0, 3).map((key) => {
                                                return <Label name={key + ":" + service.serviceLabels[key]}/>
                                            })}
                                            {Object.keys(service.serviceLabels).length > 3 && <Label name="..." />}
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
                                    <TableCell align="center">
                                        {service.serviceAge}
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