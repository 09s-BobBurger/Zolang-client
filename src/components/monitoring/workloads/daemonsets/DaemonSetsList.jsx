import React from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import UsageLineChart from "../../UsageLineChart.jsx";
import Label from "../../nodes/Label.jsx";
import Status from "../../../icon/Status.jsx";
import MiniUsageChart from "../../MiniUsageChart.jsx";
import ControllerTable from "../ControllerTable.jsx";

const DaemonSetsList = ({daemonSets, setDaemonSet}) => {
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const onClickRow = (name) => {
        axios
            .get(
                `/api/v1/cluster/${clusterId}/workload/daemons/${name}`)
            .then((res) => {
                setDaemonSet(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                width: '79vw'
            }}
        >
            <ControllerTable data={daemonSets} onClickRow={onClickRow} />
        </div>
    );
};

export default DaemonSetsList;