import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import '../../styles/MONITORING.css';
import loginUtil from '../../util/login.js';
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import { setCluster } from "../../redux/modules/cluster.js";

const ClusterList = () => {
    const navigate = useNavigate();
    const [clusters, setClusters] = useState([]);
    const dispatch = useDispatch();

    const onClickNew = () => {
        navigate("/monitoring/token");
    };

    const onClickCluster = (item) => {
        dispatch(setCluster(item.clusterId)); // item의 cluster_id 전달
        navigate("/monitoring/dashboard");
    };

    useEffect(() => {
        const fetchClusters = async () => {
            try {
                const res = await axios.get("/api/v1/cluster", {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                });

                let clustersList = res.data.data;

                const statusPromises = clustersList.map(cluster => 
                    axios.get(`/api/v1/cluster/${cluster.clusterId}/status`)
                        .then(statusRes => ({
                            ...cluster,
                            status: statusRes.data.data,
                        }))
                        .catch(err => {
                            console.log(err);
                            return { ...cluster, status: false };
                        })
                );

                const clustersWithStatus = await Promise.all(statusPromises);
                setClusters(clustersWithStatus);
            } catch (err) {
                console.log(err);
            }
        };

        fetchClusters();
    }, []);

    return (
        <div className="cluster-list-page">
            <div className="cluster-list-header">
                <h3 className="cluster-list-title">Cluster Monitoring</h3>
                <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            </div>
            <div className="cluster-list" style={{ width: "80vw" }}>
                <ul>
                    <li>
                        <span style={{ width: "20vw" }}>Name</span>
                        <span style={{ width: "50vw" }}>IP</span>
                        <span style={{ width: "5vw" }}>Version</span>
                    </li>
                    {clusters.map((item, index) => (
                        <li key={index} onClick={() => onClickCluster(item)}>
                            <span style={{ width: "20vw" }}>{item.clusterName}</span>
                            <span style={{ width: "50vw" }}>{item.domainUrl}</span>
                            <span style={{ width: "5vw" }}>{item.version}</span>
                            <span>
                                {item.status === true ? 
                                    <img src="../clusterStateTrue.svg" alt="good" /> : 
                                    <img src="../clusterStateFalse.svg" alt="bad" />}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ClusterList;
