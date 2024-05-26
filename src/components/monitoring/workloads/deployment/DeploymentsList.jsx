import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerTable from "../ControllerTable.jsx";

const DeploymentsList = ({ setDeploymentName }) => {
    const [deployments, setDeployments] = useState([]);
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);

    const loadData = () => {
        if (namespace === 'All') {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/deployments`)
                .then((res) => {
                    setDeployments(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/deployments/namespace?namespace=${namespace}`)
                .then(res => {
                    setDeployments(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        loadData();
    }, [namespace]);

    const onClickRow = (deploymentName) => {
        setDeploymentName(deploymentName);
    }
    return (
        <div>
            <ControllerTable data={deployments} onClickRow={onClickRow} />
        </div>
    );
};

export default DeploymentsList;