import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import StatefulSetsList from "./StatefulSetsList.jsx";
import StatefulSetDetail from "./StatefulSetDetail.jsx";

const StatefulSets = () => {
    const initStatefulSetName = useLocation().state ? useLocation().state.name : null;
    const [statefulSets, setStatefulSets] = useState();
    const [statefulSetName, setStatefulSetName] = useState(initStatefulSetName);
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const loadData = () => {
        if (namespace === "All") {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/statefuls`)
                .then((res) => {
                    setStatefulSets(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/statefuls/namespace?namespace=${namespace}`)
                .then((res) => {
                    setStatefulSets(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        }
    }

    const initStatefulSet = () => {
        setStatefulSetName(null);
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        <div className="overview-content">
            {statefulSetName ?
                <StatefulSetDetail statefulSetName={statefulSetName} initStatefulSet={initStatefulSet} />
                :
                <StatefulSetsList statefulSets={statefulSets} setStatefulSetName={setStatefulSetName} />
            }
        </div>
    );
};

export default StatefulSets;