import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ClusterState from "./ClusterState.jsx";
import { setCluster } from "../../redux/modules/cluster.js";
import loginUtil from "../../util/login.js";
import { customizedAxios as axios } from "../../util/customizedAxios.js";

const ClusterList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [clusters, setClusters] = useState([]);

    useEffect(() => {
        const fetchClusters = async () => {
            try {
                const res = await axios.get("/api/v1/cluster", {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                });

                let clustersList = res.data.data.slice(0, 3);

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

    const onClickNew = () => {
        navigate("/monitoring/token");
    };

    const onClickMore = () => {
        navigate("/monitoring/clusterList");
    };

    const onClickCluster = (item) => {
        dispatch(setCluster(item.clusterId));
        navigate("/monitoring/dashboard");
    };

    return (
        <div className="cluster-list-container" style={{
            padding: "20px 25px 10px 25px",
            outline: "1px solid #ABAFBD",
            borderRadius: "10px",
            background: "#2E3240",
        }}>
            <div className="cluster-list-header">
                <h3 className="cluster-list-title">Cluster Monitoring</h3>
                <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            </div>
            <div className="cluster-list" style={{
                marginBottom: '10px', marginTop: "17px"
            }}>
                <ul>
                    <li>
                        <span>Name</span>
                        <span>IP</span>
                        <span>Version</span>
                    </li>
                    {clusters.map((item, index) => (
                        <li key={index} onClick={() => onClickCluster(item)}>
                            <span>{item.clusterName}</span>
                            <span>{item.domainUrl}</span>
                            <span>{item.version}</span>
                            <span>{item.status === true ? 
                                <img src="../clusterStateTrue.svg" alt="good" /> : <img src="../clusterStateFalse.svg" alt="bad" />}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cluster-list-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="cluster-list-more-button"
                        onClick={onClickMore}
                        style={{ padding: '0', background: "transparent", margin: "5px", border: 'none' }}>
                    <span style={{ color: '#ABAFBD', marginRight: '4px', fontSize: '14px' }}>더보기</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_334_3349)">
                            <path d="M6.8 6L4.5 3.7L5.2 3L8.2 6L5.2 9L4.5 8.3L6.8 6Z" fill="#ABAFBD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_334_3349">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ClusterList;
