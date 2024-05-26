import React, { useState, useEffect } from "react";
import "../../../../styles/MONITORING.css";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import TableForm from "./TableForm";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

function DaemonSets(props) {
    const [daemonSet, setDaemonSets] = useState([]);
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
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    return <TableForm data={daemonSet} title="DaemonSets" />;
}

export default DaemonSets;
