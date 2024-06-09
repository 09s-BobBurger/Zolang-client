import React, {useEffect, useState} from 'react';
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
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import Button from "@mui/material/Button";
import ErrorMessage from "../ErrorMessage.jsx";

const PodsList = ({ setPod }) => {
    const [podsData, setPodsData] = useState({totalUsage: [], pods: []});
    const [prevToken, setPrevToken] = useState();
    const [currToken, setCurrToken] = useState(" ");
    const [nextToken, setNextToken] = useState();
    const [error, setError] = useState(false);

    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const loadData = () => {
        const isNamespaceAll = namespace === "All";
        const tokenParam = currToken.length > 1 ? `continue_token=${currToken}` : "";
        const baseUrl = `/api/v1/cluster/${clusterId}/workload/pods`;

        const url = isNamespaceAll
            ? `${baseUrl}${tokenParam ? `?${tokenParam}` : ""}`
            : `${baseUrl}/namespace?namespace=${namespace}${tokenParam ? `&${tokenParam}` : ""}`;

        axios.get(url)
            .then((res) => {
                if (res.data.success) {
                    setPodsData(res.data.data ? res.data.data : {});
                } else {
                    setError(true);
                }

            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toPrevPage = () => {
        setCurrToken(prevToken);
    }

    const toNextPage = () => {
        setPrevToken(currToken);
        setCurrToken(nextToken);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            loadData();
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace, currToken]);

    useEffect(() => {
        if (podsData.start === 1) {
            setPrevToken(null);
        }
        setNextToken(podsData.continueToken);
    }, [podsData]);

    return (
        <div className="dashboard-content">
            {error && <ErrorMessage />}
            {/* Usage Charts */}
            {podsData && podsData.totalUsage && <div
                style={{
                    display: "flex",
                    gap: "20px",
                    minWidth: "1100px"
                }}
            >
                <UsageLineChart
                    title="CPU Usage"
                    data={podsData.totalUsage.map(i => i ? i.cpuUsage : 0)}
                    time={podsData.totalUsage.map(i => i ? i.time : '-')}
                    color="#F5347F"
                    yAxis="CPU(cores)"
                />
                <UsageLineChart
                    title="Memory Usage"
                    data={podsData.totalUsage.map(i => i ? i.memoryUsage / (10 ** 9) : 0)}
                    time={podsData.totalUsage.map(i => i ? i.time : '-')}
                    color="#ffd05c"
                    yAxis="Memory(bytes)"
                    yFormat={(value) => value.toFixed(2).toString() + "Gi"}
                />
            </div>}
            {podsData && <div
                style={{
                    boxSizing: "border-box",
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
                                {podsData && podsData.pods && podsData.pods.map((pod) => (
                                    <TableRow
                                        key={pod.name}
                                        onClick={() =>
                                            setPod([pod.name, pod.namespace])
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
                                            <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                                {Object.keys(pod.labels).slice(0, 3).map((key) => {
                                                    return <Label name={key + ":" + pod.labels[key]}/>
                                                })}
                                                {Object.keys(pod.labels).length > 3 && <Label name="..."/>}
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.node}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Status status={pod.status}/>
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.restartCount}
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.metrics &&
                                                <MiniUsageChart data={pod.metrics.map(i => i ? i.cpuUsage : 0)}
                                                                color1="#F5347F" color2="#bf2662"
                                                                min={0}
                                                                usage={pod.usage ? (pod.usage.cpuUsage * 10 ** 3).toFixed(2) + "m" : null}
                                                />}
                                        </TableCell>
                                        <TableCell align="center">
                                            {pod.metrics && <MiniUsageChart
                                                data={pod.metrics.map(i => i ? i.memoryUsage / 10 ** 6 : 0)}
                                                color1="#ffb808" color2="#bf8a06"
                                                min={0}
                                                usage={pod.usage ? (pod.usage.memoryUsage / 10 ** 6).toFixed(2) + "Mi" : null}
                                            />}
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
            </div>}
        </div>

    );
};

export default PodsList;