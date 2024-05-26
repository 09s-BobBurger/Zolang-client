import React, {useState} from 'react';
import ReplicaSetsList from "./ReplicaSetsList.jsx";
import ReplicaSetDetail from "./ReplicaSetDetail.jsx";
import {useLocation} from "react-router-dom";

const ReplicaSets = () => {
    const initReplicaSetName = useLocation().state ? useLocation().state.name : null;
    const [replicaSetName, setReplicaSetName] = useState(initReplicaSetName);

    const initReplicaSet = () => {
        setReplicaSetName(null);
    }

    return (
        <div>
            {replicaSetName ?
                <ReplicaSetDetail replicaSetName={replicaSetName} initReplicaSet={initReplicaSet} />
                : <ReplicaSetsList setReplicaSetName={setReplicaSetName} />}
        </div>
    );
};

export default ReplicaSets;