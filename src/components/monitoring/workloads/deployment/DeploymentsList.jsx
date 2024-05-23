import React from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import Label from "../../nodes/Label.jsx";
import ControllerTable from "../ControllerTable.jsx";

const DeploymentsList = ({ deployments, setDeploymentName }) => {
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