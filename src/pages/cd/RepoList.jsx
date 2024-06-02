import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/CD.css';
import DeleteButton from "../../components/formtoyaml/DeleteButton.jsx";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import DeleteModal from '../../components/monitoring/DeleteModal.jsx';
import Status from "../../components/icon/Status.jsx";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import { Typography } from '@mui/material';
import CreateClusterModal from "../../components/cd/CreateClusterModal.jsx";

const RepoList = () => {
    const navigate = useNavigate();
    const [isRepoDeleteModalOpen, setIsRepoDeleteModalOpen] = useState(false);
    const [repolist, setRepolist] = useState([]);
    const [selectedRepoId, setSelectedRepoId] = useState(null);
    const [cluster, setCluster] = useState(null);
    const [isClusterModalOpen, setIsClusterModalOpen] = useState(false);
    const [isZolangClusterReady, setIsZolangClusterReady] = useState(false);

    const onClickNew = () => {
        navigate("/cd/build");
    };

    const onClickRepository = (item) => {
        navigate('/cd/dashboard', { state: { id: item.repositoryId } });
    };

    const loadData = () => {
        axios.get(`/api/v1/cicd`)
            .then((res) => {
                setRepolist(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
    };

    const createCluster = () => {
        setIsClusterModalOpen(true);
    };

    const loadCluster = () => {
        axios.get(`/api/v1/cluster`)
            .then((res) => {
                const findZolangCluster = res.data.data;
                const zolangCluster = findZolangCluster.filter(cluster => cluster.provider === 'zolang');
                if (zolangCluster.length > 0) {
                    setCluster(zolangCluster[0]);
                    setIsZolangClusterReady(zolangCluster[0].status === 'ready');
                } else {
                    setCluster(null);
                    setIsZolangClusterReady(false);
                }
                navigate("/dashboard")
            }).catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        loadCluster();
        loadData();
    }, []);

    const handleDelete = (RepoId) => {
        setSelectedRepoId(RepoId);
        setIsRepoDeleteModalOpen(true);
    };

    const changeTime = (time) => {
        const [year, month, day, hour, minute, second] = time;
        return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)));
    };

    const handleClusterCreated = () => {
        loadCluster();
    };

    return (
        <div className="repo-list-page">
            <div className="repo-list-header">
                <h3 className="repo-list-title">Repository</h3>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    {cluster ? (
                        <>
                            <Typography variant="h6" color="white">
                                {cluster.clusterName ? cluster.clusterName : null}
                            </Typography>
                            <Status status={cluster.status} />
                        </>
                    ) : (
                        <button className="new-cluster-button" onClick={createCluster}>create</button>
                    )}
                    <button 
                        className="new-repo-button" 
                        onClick={onClickNew} 
                        disabled={!isZolangClusterReady} 
                        style={{ 
                            opacity: isZolangClusterReady ? 1 : 0.5, 
                            cursor: isZolangClusterReady ? 'pointer' : 'not-allowed' 
                        }}>
                        + new
                    </button>
                </div>
            </div>
            <div className="repo-list">
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "15vw" }}>Name</TableCell>
                                <TableCell style={{ width: "40vw" }}>LastCommit</TableCell>
                                <TableCell align="center" style={{ width: "10vw" }}>LastBuildStatus</TableCell>
                                <TableCell align="center" style={{ width: "15vw" }}>Created</TableCell>
                                <TableCell> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {repolist ? (
                                repolist.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell onClick={() => onClickRepository(item)}>{item.repositoryName}</TableCell>
                                        <TableCell onClick={() => onClickRepository(item)}>{item.lastCommit}</TableCell>
                                        <TableCell align="center" style={{ textAlign: "-webkit-center" }} onClick={() => onClickRepository(item)}>
                                            <Status status={item.lastBuildStatus+".."} />
                                        </TableCell>
                                        <TableCell align="center" onClick={() => onClickRepository(item)}>
                                            {changeTime(item.createdAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
                                        </TableCell>
                                        <TableCell align="center" style={{ textAlign: "-webkit-right" }}>
                                            <DeleteButton onClick={() => handleDelete(item.repositoryId)} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <div style={{ textAlign: "-webkit-center", paddingTop: "10px" }}>
                                    <img src=".././텅.svg" width="100px" alt="이미지" />
                                </div>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                {selectedRepoId && 
                    <DeleteModal 
                        type="repo"
                        isOpen={isRepoDeleteModalOpen}
                        setIsOpen={setIsRepoDeleteModalOpen}
                        id={selectedRepoId}
                        loadData={loadData}
                    />}
                {!cluster && 
                    <CreateClusterModal 
                        isOpen={isClusterModalOpen} 
                        setIsOpen={setIsClusterModalOpen} 
                        onClusterCreated={handleClusterCreated} 
                    />}
            </div>
        </div>
    );
};

export default RepoList;