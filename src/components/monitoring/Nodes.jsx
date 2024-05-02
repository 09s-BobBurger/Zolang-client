import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import "../../styles/MONITORING.css";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Status from "../icon/Status";

function createData(name, roles, version, age, cpu, memory, disk, status) {
    return { name, roles, version, age, cpu, memory, disk, status };
}

const rows = [
    createData(
        "docker-desktop",
        "control-plane",
        "v1.29.1",
        "24d",
        30,
        70,
        10,
        "Ready"
    ),
    createData(
        "docker-desktop",
        "control-plane",
        "v1.29.1",
        "24d",
        100,
        40,
        90,
        "Fail"
    ),
    createData(
        "docker-desktop",
        "control-plane",
        "v1.29.1",
        "24d",
        60,
        40,
        80,
        "Running"
    ),
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
}));

function Nodes(props) {
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
                    Nodes
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
            <div className="moni-dashboard-nodes">
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Roles</TableCell>
                                <TableCell align="center">Version</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">CPU</TableCell>
                                <TableCell align="center">Memory</TableCell>
                                <TableCell align="center">Disk</TableCell>
                                <TableCell align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row" style={{width: "130px"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.roles}</TableCell>
                                    <TableCell align="center">{row.version}</TableCell>
                                    <TableCell align="center">{row.age}</TableCell>
                                    <TableCell align="center" style={{width: "50px"}}>
                                        <BorderLinearProgress
                                            variant="determinate"
                                            value={row.cpu}
                                        />
                                    </TableCell>
                                    <TableCell align="center" style={{width: "50px"}}>
                                        <BorderLinearProgress
                                            variant="determinate"
                                            value={row.memory}
                                        />
                                    </TableCell>
                                    <TableCell align="center" style={{width: "50px"}}>
                                        <BorderLinearProgress
                                            variant="determinate"
                                            value={row.disk}
                                        />
                                    </TableCell>
                                    <TableCell align="center"><Status status={row.status}/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Nodes;
