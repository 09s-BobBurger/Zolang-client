import React from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import Label from "../../nodes/Label.jsx";
import ControllerTable from "../ControllerTable.jsx";

const DeploymentsList = ({ deployments, setDeployment }) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const onClickRow = (deploymentName) => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/deployments/${deploymentName}`)
            .then((res) => {
                setDeployment(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <ControllerTable data={deployments} onClickRow={onClickRow} />
        </div>
    );
};

export default DeploymentsList;