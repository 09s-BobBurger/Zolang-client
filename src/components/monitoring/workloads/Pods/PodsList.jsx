import React, {useState} from 'react';
import Label from "../../nodes/Label.jsx";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Status from "../../../icon/Status.jsx";
import UsageLineChart from "../../UsageLineChart.jsx";
import MiniUsageChart from "../../MiniUsageChart.jsx";

const PodsList = ({ podsData, setPod }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                width: '79vw'
            }}
        >
            {/* Usage Charts */}
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    width: '100%'
                }}
            >
                <UsageLineChart
                    title="CPU Usage"
                    data={podsData.totalUsage.map(i => i.cpuUsage)}
                    time={podsData.totalUsage.map(i => i.time)}
                    color="#f8fc00"
                    yAxis="CPU(cores)"
                />
                <UsageLineChart
                    title="Memory Usage"
                    data={podsData.totalUsage.map(i => i.memoryUsage/(10 ** 6))}
                    time={podsData.totalUsage.map(i => i.time)}
                    color="#00bbff"
                    yAxis="Memory(bytes)"
                    yFormat={(value) => value.toFixed(1).toString() + "Mi"}
                />
            </div>
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
                                    <TableCell align="center">
                                        Image
                                    </TableCell>
                                    <TableCell align="left">
                                        Labels
                                    </TableCell>
                                    <TableCell align="center">
                                        Node
                                    </TableCell>
                                    <TableCell align="center">
                                        Status
                                    </TableCell>
                                    <TableCell align="center">
                                        Restart Counts
                                    </TableCell>
                                    <TableCell align="center">
                                        CPU Usage(cores)
                                    </TableCell>
                                    <TableCell align="center">
                                        Memory Usage(bytes)
                                    </TableCell>
                                    <TableCell align="center">
                                        Age
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {podsData.pods.map((pod) => (
                                    <TableRow
                                        key={pod.name}
                                        onClick={() =>
                                            setPod(pod.name)
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
                                            {pod.name}
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.namespace}
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.image}
                                        </TableCell>
                                        <TableCell align="center">
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                                {Object.keys(pod.labels).slice(0, 3).map((key) => {
                                                    return <Label name={key + ":" + pod.labels[key]}/>
                                                })}
                                                {Object.keys(pod.labels).length > 3 && <Label name="..." />}
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.node}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Status status={pod.status} />
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.restartCount}
                                        </TableCell>
                                        <TableCell align="center">
                                            <MiniUsageChart data={pod.metrics.map(i => i.cpuUsage)} color1="#f8fc00" color2="#b0b300"/>
                                        </TableCell>
                                        <TableCell align="center">
                                            <MiniUsageChart data={pod.metrics.map(i => i.memoryUsage)} color1="#00bbff" color2="#00729c"/>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                        >
                                            {pod.age}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>

    );
};

export default PodsList;