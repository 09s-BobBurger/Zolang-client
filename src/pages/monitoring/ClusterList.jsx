import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/MONITORING.css';
import loginUtil from '../../util/login.js';
import { cusomizedAxios as axios } from "../../util/customizedAxios.js";

const ClusterList = () => {
    const navigate = useNavigate();
    const [clusters, setClusters] = useState([]);

    const onClickNew = () => {
        navigate("/monitoring/token");
    }

    // 후에 클러스터에 대한 정보를 전달할 수 있도록 변경할 것 - 현재는 이름만 전달
    const onClickCluster = (item) => {
        navigate("/monitoring/dashboard", { state: { data: item}});
    }

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
                let clustersList = res.data.data;
                for (let i = 0; i < clustersList.length; i++) {
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

    return (
        <div className="cluster-list-page">
            <div className="cluster-list-header">
                <h3 className="cluster-list-title">Cluster Monitoring</h3>
                <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            </div>
            <div className="cluster-list" style={{width: "80vw"}}>
                <ul>
                    <li>
                        <span style={{width: "20vw"}}>Name</span>
                        <span style={{width: "50vw"}}>IP</span>
                        <span style={{width: "5vw"}}>Version</span>
                    </li>
                    {clusters.map((item) => {
                        return <li onClick={() => onClickCluster(item)}>
                            <span style={{width: "20vw"}}>{item.clusterName}</span>
                            <span style={{width: "50vw"}}>{item.domainUrl}</span>
                            <span style={{width: "5vw"}}>{item.version}</span>
                            <span>{item.status ?
                                <img src="../clusterStateTrue.svg" alt="good"/> : <img src="../clusterStateFalse.svg" alt="bad"/>}
                            </span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ClusterList;