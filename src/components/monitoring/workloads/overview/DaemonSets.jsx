import React, { useState, useEffect } from "react";
import "../../../../styles/MONITORING.css";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import TableForm from "./TableForm";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

function DaemonSets(props) {
    const [daemonSet, setDaemonSets] = useState({});
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const loadData = () => {
        const url = namespace === 'All' 
            ? `/api/v1/cluster/${clusterId}/workload/daemons` 
            : `/api/v1/cluster/${clusterId}/workload/daemons/namespace?namespace=${namespace}`;
        
        axios.get(url)
            .then((res) => {
                setDaemonSets(res.data.data.controllers || []);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        daemonSet?.length > 0 ?
        <TableForm data={daemonSet} title="DaemonSets" /> : null
    );
}

export default DaemonSets;
