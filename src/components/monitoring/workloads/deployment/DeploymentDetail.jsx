import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: "#ffffff",
    fontSize: "1.6rem"
}

const DeploymentDetail = ({ deploymentName, initDeployment}) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const [deployment, setDeployment] = useState();

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/deployments/${deploymentName}`)
            .then((res) => {
                setDeployment(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <ControllerDetail detail={deployment} goToList={initDeployment} />
    );
};

export default DeploymentDetail;