import React, {useEffect, useState} from 'react';
import ClusterState from "./ClusterState.jsx";
import {useNavigate} from "react-router-dom";
import {setCluster} from "../../redux/modules/cluster.js";
import {useDispatch} from "react-redux";
import loginUtil from "../../util/login.js";
import {customizedAxios as axios} from "../../util/customizedAxios.js";

const ClusterList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [clusters, setClusters] = useState([]);

    useEffect(() => {
        axios
            .get(
                "/api/v1/cluster",
                {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                }
            )
            .then((res) => {
                let clustersList = res.data.data.slice(0, 3);
                for (let i = 0; i < 3; i++) {
                    axios
                        .get(
                            `/api/v1/cluster/${clustersList[i].clusterId}/status`
                        )
                        .then((res) => {
                            clustersList[i].status = res.data.data;
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                setClusters(clustersList);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const onClickNew = () => {
        navigate("/monitoring/token");
    }

    const onClickMore = () => {
        navigate("/monitoring/clusterList");
    }

    // 후에 클러스터에 대한 정보를 전달할 수 있도록 변경할 것 - 클러스터 아이디 redux에 저장
    const onClickCluster = (item) => {
        dispatch(setCluster(item.clusterId)) // item의 cluster_id 전달
        navigate("/monitoring/dashboard");
    }

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
            <div className="cluster-list"
                style={{
                    marginBottom: '10px', marginTop: "17px"
                }}
            >
                <ul>
                    <li>
                        <span>Name</span>
                        <span>IP</span>
                        <span>Version</span>
                    </li>
                    {clusters.map((item) => {
                        return <li
                            onClick={() => onClickCluster(item)}
                        >
                            <span>{item.clusterName}</span>
                            <span>{item.domainUrl}</span>
                            <span>{item.version}</span>
                            <span>{item.status ?
                                <img src="../clusterStateTrue.svg" alt="good"/> : <img src="../clusterStateFalse.svg" alt="bad"/>}
                            </span>
                        </li>
                    })}
                </ul>
            </div>
            <div className="cluster-list-footer" style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <button className="cluster-list-more-button"
                        onClick={onClickMore}
                    style={{ padding: '0', background: "transparent", margin: "5px", border: 'none' }}>
                    <span style={{ color: '#ABAFBD', marginRight: '4px', fontSize: '14px'}}>더보기</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_334_3349)">
                            <path d="M6.8 6L4.5 3.7L5.2 3L8.2 6L5.2 9L4.5 8.3L6.8 6Z" fill="#ABAFBD"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_334_3349">
                                <rect width="12" height="12" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ClusterList;