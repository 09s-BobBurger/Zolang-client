import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/MONITORING.css';
import DeleteButton from "../../components/formtoyaml/DeleteButton.jsx";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import DeleteModal from '../../components/monitoring/DeleteModal.jsx';
import Status from "../../components/icon/Status.jsx";

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

    return (
        <div className="cluster-list-page">
            <div className="cluster-list-header">
                <h3 className="cluster-list-title">Repository</h3>
                <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            </div>
            <div className="cluster-list" style={{ width: "80vw" }}>
                <ul>
                    <li>
                        <span style={{ width: "10vw" }}>Name</span>
                        <span style={{ width: "10vw" }}>Created</span>
                        <span style={{ width: "10vw" }}>LastCommit</span>
                        <span style={{ width: "10vw" }}>LastBuildStatus</span>
                    </li>
                    {repolist? (repolist.map((item, index) => (
                        <li key={index}>
                            <span style={{ width: "10vw" }} onClick={() => onClickCluster(item)}>{item.repositoryName}</span>
                            <span style={{ width: "50vw" }} onClick={() => onClickCluster(item)}>{item.createdAt}</span>
                            <span style={{ width: "5vw" }} onClick={() => onClickCluster(item)}>{item.lastCommit}</span>
                            <span onClick={() => onClickCluster(item)}><Status status={item.lastBuildStatus} /></span>
                            <span><DeleteButton onClick={() => handleDelete(item.repositoryId)}></DeleteButton></span>
                        </li>
                    ))) : <div style={{textAlign: "-webkit-center", paddingTop: "10px"}}><img src=".././텅.svg" width="100px" alt="이미지"/></div> }
                </ul>
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
