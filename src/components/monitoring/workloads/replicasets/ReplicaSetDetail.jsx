import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";
const ReplicaSetDetail = ({ replicaSetName, initReplicaSet}) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
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

    return (
        <ControllerDetail detail={replicaSet} goToList={initReplicaSet}/>
    );
};

export default ReplicaSetDetail;