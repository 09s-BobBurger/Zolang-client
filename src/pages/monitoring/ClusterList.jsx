import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/MONITORING.css';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ClusterState from "../../components/dashboard/ClusterState.jsx";

const ClusterList = () => {
    const navigate = useNavigate();

    const onClickNew = () => {
        navigate("/monitoring/token");
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
        { name: 'kubernetes-admin@cluster.local', IP: '123.3.36.382', version: 'v1.30.0', state: 3},
    ]

    return (
        <div className="cluster-list-page">
            <div className="cluster-list-header">
                <h3 className="cluster-list-title">Cluster Monitoring</h3>
                <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            </div>
            <div className="cluster-list">
                <ul>
                    <li>
                        <span>Name</span>
                        <span>IP</span>
                        <span>Version</span>
                    </li>
                    {clusterNames.map((item) => {
                        return <li onClick={() => onClickCluster(item.name)}>
                            <span>{item.name}</span>
                            <span>{item.IP}</span>
                            <span>{item.version}</span>
                            <span><ClusterState state={item.state} /></span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ClusterList;