import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import '../../styles/MONITORING.css';
import DeleteButton from "../../components/formtoyaml/DeleteButton.jsx";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import { setCluster } from "../../redux/modules/cluster.js";
import DeleteModal from '../../components/monitoring/DeleteModal.jsx';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import BuildingIcon from "../../components/icon/BuildingIcon.jsx";

const ClusterList = () => {
    const navigate = useNavigate();
    const [isClusterDeleteModalOpen, setIsClusterDeleteModalOpen] = useState(false);
    const [clusters, setClusters] = useState([]);
    const [selectedClusterId, setSelectedClusterId] = useState(null);
    const dispatch = useDispatch();

    const onClickNew = () => {
        navigate("/monitoring/token");
    };

    const onClickCluster = (item) => {
        if (item.status === "ready") {
            dispatch(setCluster(item.clusterId));
            navigate("/monitoring/dashboard");
        }
    };

    const loadData = () => {
        axios.get("/api/v1/cluster", )
        .then((res) => {
            setClusters(res.data.data);
        }).catch((err) => {
        console.log(err)
        })
    }
    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (clusterId) => {
        setSelectedClusterId(clusterId);
        setIsClusterDeleteModalOpen(true);
    }

    return (
        <div className="cluster-list-page">
            <div className="cluster-list-header">
                <h3 className="cluster-list-title">Cluster Monitoring</h3>
                <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            </div>
            <div className="cluster-list">
            <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "15vw" }}>Name</TableCell>
                                <TableCell style={{ width: "40vw" }}>URL</TableCell>
                                <TableCell align="center" style={{ width: "10vw" }}>Version</TableCell>
                                <TableCell> </TableCell>
                                <TableCell align="right"> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {clusters?.length > 0? (clusters.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell onClick={() => onClickCluster(item)}>{item.clusterName}</TableCell>
                                    <TableCell onClick={() => onClickCluster(item)}>{item.domainUrl}</TableCell>
                                    <TableCell onClick={() => onClickCluster(item)} align="center" style={{textAlign: "-webkit-center"}}>{item.version}</TableCell>
                                    <TableCell onClick={() => onClickCluster(item)} align="center">
                                        {item.status === "ready" ?
                                        <img src="../clusterStateTrue.svg" alt="good" /> :
                                            item.status === "creating" ?
                                                <BuildingIcon /> :
                                                <img src="../clusterStateFalse.svg" alt="bad" />}
                                    </TableCell>
                                    <TableCell align="center" style={{textAlign: "-webkit-right"}} onClick={() => handleDelete(item.clusterId)}><DeleteButton></DeleteButton></TableCell>
                                </TableRow>
                            ))) : <div style={{textAlign: "-webkit-center", paddingTop: "10px"}}><img src=".././텅.svg" width="100px" alt="이미지"/></div> }
                        </TableBody>
                    </Table>
                </TableContainer>
                {selectedClusterId && 
                <DeleteModal 
                    type="cluster"
                    isOpen={isClusterDeleteModalOpen} 
                    setIsOpen={setIsClusterDeleteModalOpen} 
                    id={selectedClusterId} 
                    loadData={loadData} 
                />
            }
            </div>
        </div>
    );
};

export default ClusterList;
