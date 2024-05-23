import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ReplicaSetsList from "./ReplicaSetsList.jsx";
import ReplicaSetDetail from "./ReplicaSetDetail.jsx";
import {useLocation} from "react-router-dom";

const ReplicaSets = () => {
    const initReplicaSetName = useLocation().state ? useLocation().state.name : null;
    const [replicaSets, setReplicaSets] = useState();
    const [replicaSetName, setReplicaSetName] = useState(initReplicaSetName);
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const loadData = () => {
        if (namespace === "All") {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/replicas`)
                .then((res) => {
                    setReplicaSets(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/replicas/namespace?namespace=${namespace}`)
                .then((res) => {
                    setReplicaSets(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        }
    }

    const initReplicaSet = () => {
        setReplicaSetName(null);
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        <div className="overview-content">
            {!replicaSetName && <ReplicaSetsList replicaSets={replicaSets} setReplicaSetName={setReplicaSetName} />}
            {replicaSetName && <ReplicaSetDetail replicaSetName={replicaSetName} initReplicaSet={initReplicaSet} />}
        </div>
    );
};

export default ReplicaSets;