import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCluster } from "../../redux/modules/cluster.js";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import BuildingIcon from "../icon/BuildingIcon.jsx";
import HoverEventIcon from "../icon/HoverEventIcon.jsx";
import ArrowForwardIos from "../icon/ArrowForwardIos.jsx";

const ClusterList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [clusters, setClusters] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/cluster", )
                .then((res) => {
                    setClusters(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
    }, []);

    const onClickNew = () => {
        navigate("/monitoring/token");
    };

    const onClickCluster = (item) => {
        if (item.status === "ready") {
            dispatch(setCluster(item.clusterId));
            navigate("/monitoring/dashboard");
        }
    };

    return (
        <div className="cluster-list-container" style={{
            padding: "20px 25px 10px 25px",
            outline: "1px solid #ABAFBD",
            borderRadius: "10px",
            background: "#2E3240",
            position: "relative",
            margin: 0,
            height: "-webkit-fill-available"
        }}>
            <div className="cluster-list-header">
                <h3 className="cluster-list-title">Cluster Monitoring</h3>
                <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            </div>
            <div className="cluster-list" style={{
                marginBottom: '10px', marginTop: "17px"
            }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "15vw" }}>Name</TableCell>
                                <TableCell style={{ width: "40vw" }}>URL</TableCell>
                                <TableCell align="center" style={{ width: "10vw" }}>Provider</TableCell>
                                <TableCell> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {clusters?.length > 0? (clusters.slice(0,3).map((item, index) => (
                                <TableRow  key={index}>
                                    <TableCell onClick={() => onClickCluster(item)}>{item.clusterName}</TableCell>
                                    <TableCell onClick={() => onClickCluster(item)}>{item.domainUrl}</TableCell>
                                    <TableCell align="center" style={{textAlign: "-webkit-center"}} onClick={() => onClickCluster(item)}>{
                                            item.provider === "zolang" ?
                                            <HoverEventIcon src="../../../zolang_img.png" alt={item.provider}/>
                                                :
                                                <HoverEventIcon src="../../../external.svg" alt={item.provider} />
                                        }</TableCell>
                                    <TableCell align="center" onClick={() => onClickCluster(item)}>
                                        {item.status === "ready" ?
                                            <img src="../clusterStateTrue.svg" alt="good" /> :
                                            item.status === "creating" ?
                                                <BuildingIcon /> :
                                                <img src="../clusterStateFalse.svg" alt="bad" />}
                                    </TableCell>
                                </TableRow>
                            ))) : 
                            <TableRow>
                                <TableCell colSpan={4} align="center" style={{ padding: "10px" }}>
                                    <img src=".././텅.svg" width="100px" alt="No Clusters" />
                                </TableCell>
                            </TableRow> }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <Link to="/monitoring/clusterList" style={{ textDecoration: "none" }}>
                        <span
                            style={{
                                color: "#ABAFBD",
                                fontSize: "14px",
                                position: "absolute",
                                right: "15px",
                                bottom: "10px",
                                margin: "5px",
                            }}
                        >
                            더보기 <ArrowForwardIos />
                        </span>
                </Link>
            </div>
        </div>
    );
};

export default ClusterList;
