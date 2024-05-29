import React, {useState} from 'react';
import ReplicaSetsList from "./ReplicaSetsList.jsx";
import ReplicaSetDetail from "./ReplicaSetDetail.jsx";
import {useLocation} from "react-router-dom";

const ReplicaSets = () => {
    const initReplicaSetName = useLocation().state ? useLocation().state.name : null;
    const initReplicaSetNamespace = useLocation().state ? useLocation().state.namespace : null;
    const [selectedReplica, setSelectedReplica] = useState(initReplicaSetName && initReplicaSetNamespace ? [initReplicaSetName, initReplicaSetNamespace] : null);

    const initReplicaSet = () => {
        setSelectedReplica(null);
    }

    return (
        <div>
            {selectedReplica ?
                <ReplicaSetDetail selectedReplica={selectedReplica} initReplicaSet={initReplicaSet} />
                : <ReplicaSetsList setSelectedReplica={setSelectedReplica} />}
        </div>
    );
};

export default ReplicaSets;