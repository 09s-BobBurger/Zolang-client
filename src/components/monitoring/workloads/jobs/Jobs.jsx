import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerTable from "../ControllerTable.jsx";

const Jobs = () => {
    const [jobs, setJobs] = useState();
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const loadData = () => {
        if (namespace === 'All') {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/deployments`)
                .then((res) => {
                    setJobs(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/deployments/namespace?namespace=${namespace}`)
                .then(res => {
                    setJobs(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
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
            <ControllerTable data={jobs} />
        </div>
    );
};

export default Jobs;