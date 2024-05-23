import React, {useState, useEffect} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import ControllerTable from "../ControllerTable.jsx";
import DaemonSetsList from "./DaemonSetsList.jsx";
import DaemonSetDetail from "./DaemonSetDetail.jsx";

const DaemonSets = () => {
    const [daemonSets, setDaemonSets] = useState();
    const [selectedDaemonSet, setSelectedDaemonSet] = useState(null);
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const initDaemonSet = () => {
        setSelectedDaemonSet(null);
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
            {!selectedDaemonSet && <DaemonSetsList
                daemonSets={daemonSets}
                setDaemonSet={setSelectedDaemonSet}
            />}
            {selectedDaemonSet && <DaemonSetDetail
                daemonSet={selectedDaemonSet}
                initDaemonSet={initDaemonSet}/>}
        </div>
    );
};

export default DaemonSets;