import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import "../../../../styles/MONITORING.css";
import { useNavigate } from "react-router-dom";
import Label from "../../nodes/Label";
import Status from "../../../icon/Status.jsx";

function TableForm({ data, title }) {
    const navigate = useNavigate();

    const onClick= (name) => {
        if (title== "DaemonSets"){
            navigate('workloads/daemonsets', { state: { name : name } })
            
        } else if (title== "Deployments") {
            navigate('workloads/deployments', { state: { name : name } })
        }
    };

    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                height: "auto",
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
                    {title}
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
            <div className="moni-workloads-table">
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{minWidth: "200px"}}>Name</TableCell>
                                <TableCell style={{minWidth: "90px"}}>Namespace</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Labels</TableCell>
                                <TableCell align="center" style={{minWidth: "30px"}}>Pod</TableCell>
                                <TableCell align="center">Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.length > 0 && data.slice(0, 3).map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                    onClick={() => onClick(row.name)}
                                >
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.namespace}</TableCell>
                                    <TableCell>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {row.images.slice(0, 3).map(image => {
                                                return <Label name={image}/>
                                            })}
                                            {row.images.length > 3 && <Label name="..." />}
                                            {Object.keys(row.images).length > 3 && <Label name="..." />}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div style={{display: "flex", flexWrap: "wrap", gap: "5px"}}>
                                        {Object.keys(row.labels).slice(0, 3).map(
                                            (labelKey, index) => (
                                                <Label name={labelKey+row.labels[labelKey]} />
                                            )
                                        )}
                                        {Object.keys(row.labels).length > 3 && <Label name="..." />}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">{row.replicas} / {row.readyReplicas}</TableCell>
                                    <TableCell align="center">{row.age}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default TableForm;
