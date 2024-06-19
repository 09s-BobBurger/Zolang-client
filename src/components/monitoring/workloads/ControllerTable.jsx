import React from 'react';
import Label from "../nodes/Label.jsx";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";

// demonSet, deployment, statefulSet, ReplicasSet 모두 list table 형식이 같음( Job, cronjob만 형식 다름)
const ControllerTable = ({data, onClickRow, toPrevPage, toNextPage, prevToken, nextToken}) => {
    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                minWidth: "1100px"
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
                                    Images
                                </TableCell>
                                <TableCell align="left">
                                    Labels
                                </TableCell>
                                <TableCell align="center">
                                    Pods
                                </TableCell>
                                <TableCell align="center">
                                    Age
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.controllers && data.controllers.map((item) => (
                                <TableRow
                                    key={item.name}
                                    onClick={() => {
                                        if (onClickRow) onClickRow([item.name, item.namespace])
                                    }}
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
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.namespace}
                                    </TableCell>
                                    <TableCell align="center">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {item.images && item.images.slice(0, 3).map(image => {
                                                return <Label name={image}/>
                                            })}
                                            {item.images && item.images.length > 3 && <Label name="..." />}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {item.labels && Object.keys(item.labels).slice(0, 3).map((key) => {
                                                return <Label name={key + ":" + item.labels[key]}/>
                                            })}
                                            {item.labels && Object.keys(item.labels).length > 3 && <Label name="..." />}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.replicas} / {item.readyReplicas}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.age}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                { (prevToken || nextToken) && <div className="page-buttons"
                      style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "10px"
                      }}
                >
                    <Button
                        onClick={toPrevPage}
                        disabled={!prevToken}
                    >
                        <img style={{width: "30px", opacity: prevToken ? "100" : '0'}}
                             src="../../../round-double-arrow-left.svg" alt="to previous page button"/>
                    </Button>
                    <Button
                        onClick={toNextPage}
                        disabled={!nextToken}
                    >
                        <img style={{width: "30px", opacity: nextToken ? "100" : '0'}}
                             src="../../../round-double-arrow-right.svg" alt="to next page button"/>
                    </Button>
                </div>}
            </div>
        </div>
    );
};

export default ControllerTable;