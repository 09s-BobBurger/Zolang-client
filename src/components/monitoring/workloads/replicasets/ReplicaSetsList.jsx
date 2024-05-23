import React from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import ControllerTable from "../ControllerTable.jsx";
import {useSelector} from "react-redux";

const ReplicaSetsList = ({ replicaSets, setReplicaSetName}) => {
    const onClickRow = (name) => {
        setReplicaSetName(name);
    }
    return (
        <div>
            <ControllerTable data={replicaSets} onClickRow={onClickRow} />
        </div>
    );
};

export default ReplicaSetsList;