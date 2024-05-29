import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import '../../styles/MONITORING.css';
import DeleteButton from "../../components/formtoyaml/DeleteButton.jsx";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import { setCluster } from "../../redux/modules/cluster.js";
import ClusterDeleteModal from '../../components/monitoring/ClusterDeleteModal.jsx';

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
        dispatch(setCluster(item.clusterId)); // item의 cluster_id 전달
        navigate("/monitoring/dashboard");
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
            <div className="cluster-list" style={{ width: "80vw" }}>
                <ul>
                    <li>
                        <span style={{ width: "10vw" }}>Name</span>
                        <span style={{ width: "50vw" }}>IP</span>
                        <span style={{ width: "5vw" }}>Version</span>
                    </li>
                    {clusters?.length > 0? (clusters.map((item, index) => (
                        <li key={index}>
                            <span style={{ width: "10vw" }} onClick={() => onClickCluster(item)}>{item.clusterName}</span>
                            <span style={{ width: "50vw" }} onClick={() => onClickCluster(item)}>{item.domainUrl}</span>
                            <span style={{ width: "5vw" }} onClick={() => onClickCluster(item)}>{item.version}</span>
                            <span onClick={() => onClickCluster(item)}>
                                {item.status === "ready" ? 
                                    <img src="../clusterStateTrue.svg" alt="good" /> : 
                                    <img src="../clusterStateFalse.svg" alt="bad" />}
                                
                            </span>
                            <span><DeleteButton onClick={() => handleDelete(item.clusterId)}></DeleteButton></span>
                        </li>
                    ))) : <div style={{textAlign: "-webkit-center", paddingTop: "10px"}}><img src=".././텅.svg" width="100px" alt="이미지"/></div> }
                </ul>
                {selectedClusterId && 
                <ClusterDeleteModal 
                    isOpen={isClusterDeleteModalOpen} 
                    setIsOpen={setIsClusterDeleteModalOpen} 
                    cluster_id={selectedClusterId} 
                    loadData={loadData} 
                />
            }
            </div>
        </div>
    );
};

export default ClusterList;
