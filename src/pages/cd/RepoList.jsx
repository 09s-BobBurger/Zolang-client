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

const RepoList = () => {
    const navigate = useNavigate();
    const [isRepoDeleteModalOpen, setIsRepoDeleteModalOpen] = useState(false);
    const [repolist, setRepolist] = useState([]);
    const [selectedRepoId, setSelectedRepoId] = useState(null);

    const onClickNew = () => {
        // navigate("/monitoring/token");
    };

    const onClickCluster = (item) => {
        // navigate("/monitoring/dashboard");
    };

    const loadData = () => {
        axios.get(`/api/v1/cicd` )
        .then((res) => {
            setRepolist(res.data.data);
        }).catch((err) => {
        console.log(err)
        })
    }
    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (RepoId) => {
        setSelectedRepoId(RepoId);
        setIsRepoDeleteModalOpen(true);
    }

    const changeTime = (time) => {
        const [year, month, day, hour, minute, second] = time;
        return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)));
    }

    return (
        <div className="repo-list-page">
            <div className="repo-list-header">
                <h3 className="repo-list-title">Repository</h3>
                <button className="new-repo-button" onClick={onClickNew}>+ new</button>
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
                        {repolist? (repolist.map((item, index) => (
                                <TableRow  key={index}>
                                    <TableCell onClick={() => onClickCluster(item)}>{item.repositoryName}</TableCell>
                                    <TableCell onClick={() => onClickCluster(item)}>{item.lastCommit}</TableCell>
                                    <TableCell align="center" style={{textAlign: "-webkit-center"}} onClick={() => onClickCluster(item)}><Status status={item.lastBuildStatus} /></TableCell>
                                    <TableCell align="center" onClick={() => onClickCluster(item)}>{changeTime(item.createdAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</TableCell>
                                    <TableCell align="center" style={{textAlign: "-webkit-right"}}><DeleteButton onClick={() => handleDelete(item.repositoryId)}></DeleteButton></TableCell>
                                </TableRow>
                            ))) : <div style={{textAlign: "-webkit-center", paddingTop: "10px"}}><img src=".././텅.svg" width="100px" alt="이미지"/></div> }
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
                />
            }
            </div>
        </div>
    );
};

export default RepoList;
