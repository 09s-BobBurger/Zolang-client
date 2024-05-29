import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";
import useDidMountEffect from "../../../../hooks/useDidMountEffect.js";

const DeploymentDetail = ({ deploymentName, initDeployment}) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const [deployment, setDeployment] = useState();

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/deployments/${deploymentName}?namespace=${namespace}`)
            .then((res) => {
                setDeployment(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useDidMountEffect(() => {
        initDeployment();
    }, [namespace]);

    return (
        <ControllerDetail detail={deployment} goToList={initDeployment} />
    );
};

export default DeploymentDetail;