import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerTable from "../ControllerTable.jsx";
import JobsList from "./JobsList.jsx";

const Jobs = () => {
    const [jobs, setJobs] = useState();
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const loadData = () => {
        if (namespace === 'All') {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/jobs`)
                .then((res) => {
                    setJobs(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/jobs/namespace?namespace=${namespace}`)
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
            <JobsList jobs={jobs} />
        </div>
    );
};

export default Jobs;