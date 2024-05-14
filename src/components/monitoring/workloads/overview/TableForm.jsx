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

    const onClickMore = () => {
        navigate("/monitoring/dashboard");
    };

    const onClickCluster = (item) => {
        navigate("/monitoring/dashboard", { state: { data: item } });
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
                                <TableCell>Namespace</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Labels</TableCell>
                                <TableCell>Node</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Restart</TableCell>
                                <TableCell>Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.slice(0, 3).map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                    onClick={onClickMore}
                                >
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.namespace}</TableCell>
                                    <TableCell>
                                        {row.image.join(", ")}
                                    </TableCell>
                                    <TableCell>
                                        <div style={{display: "flex", flexWrap: "wrap", gap: "5px"}}>
                                        {Object.keys(row.labels).map(
                                            (labelKey, index) => (
                                                <Label name={labelKey+row.labels[labelKey]} />
                                            )
                                        )}
                                        </div>
                                    </TableCell>
                                    <TableCell>{row.node}</TableCell>
                                    <TableCell><Status status={row.status} /></TableCell>
                                    <TableCell>{row.restartCount}</TableCell>
                                    <TableCell>{row.age}</TableCell>
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
