import React from 'react';
import ClusterState from "./ClusterState.jsx";
import {useNavigate} from "react-router-dom";

const ClusterList = () => {
    const navigate = useNavigate();

    const onClickNew = () => {
        navigate("/monitoring/token");
    }

    const onClickMore = () => {
        navigate("/monitoring/clusterList");
    }

    // 후에 클러스터에 대한 정보를 전달할 수 있도록 변경할 것 - 현재는 이름만 전달
    const onClickCluster = (item) => {
        navigate("/monitoring/dashboard", { state: { data: item}});
    }

    // testData
    const clusterNames = [
        { name: 'bell-k8s-test-context', IP: '123.3.36.382', version: 'v1.30.0', state: 1},
        { name: 'dkos-test-pg1-context', IP: 'local', version: 'v1.30.0', state: 2},
        { name: 'kubernetes-admin@cluster.local', IP: '123.3.36.382', version: 'v1.30.0', state: 3},
    ]

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
                    marginBottom: '10px', marginTop: "19px"
                }}
            >
                <ul>
                    <li>
                        <span>Name</span>
                        <span>IP</span>
                        <span>Version</span>
                    </li>
                    {clusterNames.map((item) => {
                        return <li
                            onClick={() => onClickCluster(item.name)}
                        >
                            <span>{item.name}</span>
                            <span>{item.IP}</span>
                            <span>{item.version}</span>
                            <span><ClusterState state={item.state} /></span>
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