import React, {useState, useEffect} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import ControllerTable from "../ControllerTable.jsx";
import DaemonSetsList from "./DaemonSetsList.jsx";
import DaemonSetDetail from "./DaemonSetDetail.jsx";
import {useLocation} from "react-router-dom";

const DaemonSets = () => {
    const initDaemonSetName = useLocation().state ? useLocation().state.name : null;
    const [daemonSets, setDaemonSets] = useState();
    const [daemonSetName, setDaemonSetName] = useState(initDaemonSetName);
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const initDaemonSet = () => {
        setDaemonSetName(null);
    }

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

    return (
        <div>
            {!daemonSetName && <DaemonSetsList
                daemonSets={daemonSets}
                setDaemonSetName={setDaemonSetName}
            />}
            {daemonSetName && <DaemonSetDetail
                daemonSetName={daemonSetName}
                initDaemonSet={initDaemonSet}/>}
        </div>
    );
};

export default DaemonSets;