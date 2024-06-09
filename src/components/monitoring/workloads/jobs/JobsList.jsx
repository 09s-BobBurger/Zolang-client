import React from 'react';
import Label from "../../nodes/Label.jsx";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";

const JobsList = ({ jobs, prevToken, nextToken, toPrevPage, toNextPage }) => {
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
                                <TableCell align="center" width="15%">
                                    Completions / Total
                                </TableCell>
                                <TableCell align="center">
                                    Duration
                                </TableCell>
                                <TableCell align="center">
                                    Age
                                </TableCell>
                                <TableCell align="left" width="30%">
                                    Labels
                                </TableCell>
                                <TableCell align="center">
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {jobs && jobs.map((item) => (
                                <TableRow
                                    key={item.name}
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
                                        {item.completions} / {item.total}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.duration}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.age}
                                    </TableCell>
                                    <TableCell align="center">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {
                                                Object.keys(item.labels || {}).length > 0 ?
                                                    Object.keys(item.labels).map((key) => {
                                                        return <Label name={key + ":" + item.labels[key]}/>})
                                                    : '-'
                                            }
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        {/*<Status status={item.status} />*/}
                                        {item.status}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {(prevToken || nextToken) && <div className="page-buttons"
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

export default JobsList;