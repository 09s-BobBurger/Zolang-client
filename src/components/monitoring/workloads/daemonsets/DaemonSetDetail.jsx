import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";

const DaemonSetDetail = ({ daemonSetName, initDaemonSet }) => {
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const [daemonSet, setDaemonSet] = useState();

    useEffect(() => {
        axios
            .get(
                `/api/v1/cluster/${clusterId}/workload/daemons/${daemonSetName}`)
            .then((res) => {
                setDaemonSet(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <ControllerDetail detail={daemonSet} goToList={initDaemonSet}/>
    );
};

export default DaemonSetDetail;