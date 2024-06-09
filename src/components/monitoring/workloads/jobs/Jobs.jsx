import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import JobsList from "./JobsList.jsx";
import ErrorMessage from "../ErrorMessage.jsx";

const Jobs = () => {
    const [jobs, setJobs] = useState({});
    const [prevToken, setPrevToken] = useState();
    const [currToken, setCurrToken] = useState(" ");
    const [nextToken, setNextToken] = useState();
    const [error, setError] = useState(false);

    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);

    const loadData = () => {
        const isNamespaceAll = namespace === "All";
        const tokenParam = currToken.length > 1 ? `continue_token=${currToken}` : "";
        const baseUrl = `/api/v1/cluster/${clusterId}/workload/jobs`;

        const url = isNamespaceAll
            ? `${baseUrl}${tokenParam ? `?${tokenParam}` : ""}`
            : `${baseUrl}/namespace?namespace=${namespace}${tokenParam ? `&${tokenParam}` : ""}`;

        axios.get(url)
            .then((res) => {
                setJobs(res.data.data ? res.data.data : {});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toPrevPage = () => {
        setCurrToken(prevToken);
    }

    const toNextPage = () => {
        setPrevToken(currToken);
        setCurrToken(nextToken);
    }

    useEffect(() => {
        loadData();
    }, [namespace, currToken]);

    useEffect(() => {
        if (jobs.start === 1) {
            setPrevToken(null);
        }
        setNextToken(jobs.continueToken);
    }, [jobs]);

    return (
        <div className="dashboard-content">
            {error && <ErrorMessage />}
            {jobs && <JobsList
                jobs={jobs.jobs}
                prevToken={prevToken}
                nextToken={nextToken}
                toPrevPage={toPrevPage}
                toNextPage={toNextPage}
            />}
        </div>
    );
};

export default Jobs;