import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerTable from "../ControllerTable.jsx";

const DaemonSetsList = ({ setDaemonSetName }) => {
    const [daemonSets, setDaemonSets] = useState();
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);
    const loadData = () => {
        if (namespace === "All") {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/daemons`)
                .then((res) => {
                    setDaemonSets(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/daemons/namespace?namespace=${namespace}`)
                .then((res) => {
                    setDaemonSets(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        loadData();
    }, [namespace]);

    const onClickRow = (name) => {
        setDaemonSetName(name);
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