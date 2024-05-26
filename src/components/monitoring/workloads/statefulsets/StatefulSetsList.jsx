import React, {useEffect, useState} from 'react';
import ControllerTable from "../ControllerTable.jsx";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";

const StatefulSetsList = ({ setStatefulSetName }) => {
    const [statefulSets, setStatefulSets] = useState();
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

    const onClickRow = (name) => {
        setStatefulSetName(name);
    }

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        <div>
            <ControllerTable data={statefulSets} onClickRow={onClickRow} />
        </div>
    );
};

export default StatefulSetsList;