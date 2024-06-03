import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import Label from "../../nodes/Label.jsx";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const CronJobs = () => {
    const [cronJobs, setCronJobs] = useState();
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const loadData = () => {
        if (namespace === 'All') {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/cron-jobs`)
                .then((res) => {
                    setCronJobs(res.data.data.cronJobs);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/cron-jobs/namespace?namespace=${namespace}`)
                .then(res => {
                    setCronJobs(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    function calculateTime(timestamp) {
        const parts = timestamp.match(/(\d+)\. (\d+)\. (\d+)\. (오전|오후) (\d+):(\d+):(\d+)/);
        if (!parts) {
            return 'NaN';
        }
    
        const year = parseInt(parts[1], 10);
        const month = parseInt(parts[2], 10) - 1;
        const day = parseInt(parts[3], 10);
        const meridiem = parts[4];
        let hour = parseInt(parts[5], 10);
        const minute = parseInt(parts[6], 10);
        const second = parseInt(parts[7], 10);
    
        if (meridiem === '오후' && hour !== 12) {
            hour += 12;
        } else if (meridiem === '오전' && hour === 12) {
            hour = 0;
        }
        const providedDate = new Date(year, month, day, hour, minute, second);
        const currentTime = new Date();
        const timeDifferenceInMilliseconds = currentTime - providedDate;
        const timeDifferenceInMinutes = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
    
        return timeDifferenceInMinutes + "분 전";
    }
    
    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
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
                                <TableCell>
                                    Labels
                                </TableCell>
                                <TableCell align="center">
                                    Schedule
                                </TableCell>
                                <TableCell align="center">
                                    suspend
                                </TableCell>
                                <TableCell align="center">
                                    active
                                </TableCell>
                                <TableCell align="center">
                                    lastScheduling
                                </TableCell>
                                <TableCell align="center">
                                    lastSchedule
                                </TableCell>
                                <TableCell align="center">
                                    age
                                </TableCell>
                                <TableCell align="center">
                                    created
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cronJobs && cronJobs.map((cronJob) => (
                                <TableRow
                                    key={cronJob.name}
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
                                        {cronJob.name}
                                    </TableCell>
                                    <TableCell align="center">
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {Object.keys(cronJob.labels).map((key) => {
                                                return <Label name={key + ":" + cronJob.labels[key]}/>
                                            })}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        {cronJob.schedule}
                                    </TableCell>
                                    <TableCell align="center">
                                        {cronJob.suspend}
                                    </TableCell>
                                    <TableCell align="center">
                                        {cronJob.active}
                                    </TableCell>
                                    <TableCell align="center">
                                    {cronJob.lastScheduling}
                                    </TableCell>
                                    <TableCell align="center">
                                        {calculateTime(cronJob.lastScheduleDateTime)}
                                    </TableCell>
                                    <TableCell align="center">
                                        {cronJob.age}
                                    </TableCell>
                                    <TableCell align="center">
                                        {cronJob.creationDateTime}
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

export default CronJobs;