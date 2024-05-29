import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";
import useDidMountEffect from "../../../../hooks/useDidMountEffect.js";

const DaemonSetDetail = ({ daemonSetName, initDaemonSet }) => {
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const [daemonSet, setDaemonSet] = useState();

    useEffect(() => {
        axios
            .get(
                `/api/v1/cluster/${clusterId}/workload/daemons/${daemonSetName}?namespace=${namespace}`,
            )
            .then((res) => {
                setDaemonSet(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useDidMountEffect(() => {
        initDaemonSet();
    }, [namespace]);

    return (
        <ControllerDetail detail={daemonSet} goToList={initDaemonSet}/>
    );
};

export default DaemonSetDetail;