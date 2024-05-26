import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import ControllerTable from "../ControllerTable.jsx";
import {useSelector} from "react-redux";

const ReplicaSetsList = ({ setReplicaSetName }) => {
    const [replicaSets, setReplicaSets] = useState();
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

    const onClickRow = (name) => {
        setReplicaSetName(name);
    }

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        <div>
            <ControllerTable data={replicaSets} onClickRow={onClickRow} />
        </div>
    );
};

export default ReplicaSetsList;