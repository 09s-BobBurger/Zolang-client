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

    const loadData = async () => {
        try {
            let res;
            if (namespace === "All") {
                res = await axios.get(`/api/v1/cluster/${clusterId}/workload/daemons`);
            } else {
                res = await axios.get(`/api/v1/cluster/${clusterId}/workload/daemons/namespace?namespace=${namespace}`);
            }
            setDaemonSets(res.data.data.controllers);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        daemonSet? 
        <TableForm data={daemonSet} title="DaemonSets" /> : null
    );
}

export default DaemonSets;
