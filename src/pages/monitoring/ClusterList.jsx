import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/MONITORING.css';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const ClusterList = () => {
    const navigate = useNavigate();

    const onClickNew = () => {
        navigate("/monitoring/token");
    }

    // testData
    const clusterNames = [
        'cluster1', 'cluster2', 'cluster3'
    ]

    return (
        <div className="cluster-list-page">
            <button className="new-cluster-button" onClick={onClickNew}>+ new</button>
            <div className="cluster-list">
                <ul>
                    <li>
                        <span>이름</span>
                    </li>
                    {clusterNames.map((item) => {
                        return <li>
                            <span>{item}</span>
                            <SignalCellularAltIcon className="view-icon" onClick={() => {
                                navigate('/monitoring/dashboard', { state: {data : {item}}, })
                            }} />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ClusterList;