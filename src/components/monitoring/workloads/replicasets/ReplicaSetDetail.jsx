import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";
import useDidMountEffect from "../../../../hooks/useDidMountEffect.js";
const ReplicaSetDetail = ({ replicaSetName, initReplicaSet}) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const [replicaSet, setReplicaSet] = useState();

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/replicas/${replicaSetName}`)
            .then((res) => {
                setReplicaSet(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useDidMountEffect(() => {
        initReplicaSet();
    }, [namespace]);

    return (
        <ControllerDetail detail={replicaSet} goToList={initReplicaSet}/>
    );
};

export default ReplicaSetDetail;