import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import '../../styles/MONITORING.css';
import {customizedAxios as axios} from "../../util/customizedAxios.js";
import BuildingIcon from "../icon/BuildingIcon.jsx";

const BuildResult = ({repositoryId}) => {
    const [results, setResults] = useState([]);

    const loadData = () => {
        axios
            .get(`/api/v1/cicd/${repositoryId}`)
            .then(res => {
                setResults(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div
            style={{
                background: "#2E3240",
                top: "68px",
                position: "fixed",
                boxSizing: "border-box",
                width: "100vw",
                height: "calc(100% - 68px)",
                overflow: "auto",
                padding: "30px 40px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px"
                }}
            >
                <span
                    style={{
                        fontSize: "2.5rem",
                        color: "white",
                    }}
                >
                    Repository Name
                </span>
                <Button
                    style={{
                        width: "fit-content",
                        height: "fit-content",
                        margin: 0,
                        background: "transparent",
                        outline: "none",
                    }}
                >
                    <img width="40px" src="../../../setting.svg" alt="edit build setting"/>
                </Button>
            </div>
            <div className="moni-dashboard-nodes"
                style={{
                    width: "100%"
                }}
            >
                <TableContainer>
                    <Table
                        sx={{ color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" width="10%">Build Result</TableCell>
                                <TableCell align="center" width="10%">No.</TableCell>
                                <TableCell align="center">Last Commit Message</TableCell>
                                <TableCell align="center" width="20%">Build Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                results.length > 0 &&
                                    results.sort((a, b) => b.buildNumber - a.buildNumber).map((item, index) => {
                                        const createdAt = item.createdAt;

                                        return (
                                            <TableRow key={index} sx={{ height: "60px"}}>
                                                <TableCell>
                                                    {item.buildStatus === "success" ?
                                                        <img width="30px" src="../../../success-svgrepo-com.svg"  alt="build succeed"/>
                                                        : item.buildStatus === "building" ?
                                                            <BuildingIcon />
                                                            : <img  width="30px" src="../../../failed.svg" alt="build failed"/>
                                                    }
                                                </TableCell>
                                                <TableCell>{item.buildNumber}</TableCell>
                                                <TableCell>{item.lastCommitMessage}</TableCell>
                                                <TableCell>
                                                    {createdAt.slice(0, 3).join(".") + " "
                                                        + createdAt.slice(3, createdAt.length - 1).join(":")}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                            }
                        </TableBody>
                    </Table>
                    {
                        results.length === 0 &&
                        <div style={{textAlign: "-webkit-center", paddingTop: "50px"}}>
                            <img src=".././텅.svg" width="150px" alt="이미지"/>
                        </div>
                    }
                </TableContainer>
            </div>
        </div>
    );
};

export default BuildResult;