import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import ControllerTable from "../ControllerTable.jsx";
import {useSelector} from "react-redux";

const ReplicaSetsList = ({ setSelectedReplica }) => {
    const [replicaSets, setReplicaSets] = useState({});
    const [prevToken, setPrevToken] = useState();
    const [currToken, setCurrToken] = useState(" ");
    const [nextToken, setNextToken] = useState();
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const loadData = () => {
        const isNamespaceAll = namespace === "All";
        const tokenParam = currToken.length > 1 ? `continue_token=${currToken}` : "";
        const baseUrl = `/api/v1/cluster/${clusterId}/workload/replicas`;

        const url = isNamespaceAll
            ? `${baseUrl}${tokenParam ? `?${tokenParam}` : ""}`
            : `${baseUrl}/namespace?namespace=${namespace}${tokenParam ? `&${tokenParam}` : ""}`;

        axios.get(url)
            .then((res) => {
                setReplicaSets(res.data.data ? res.data.data : {});
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
        const timer = setInterval(() => {
            loadData();
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace, currToken]);

    useEffect(() => {
        if (replicaSets.start === 1) {
            setPrevToken(null);
        }
        setNextToken(replicaSets.continueToken);
    }, [replicaSets]);

    const onClickRow = (data) => {
        setSelectedReplica(data);
    }

    return (
        <div className="dashboard-content">
            <ControllerTable
                data={replicaSets}
                onClickRow={onClickRow}
                toPrevPage={toPrevPage}
                toNextPage={toNextPage}
                prevToken={prevToken}
                nextToken={nextToken}
            />
        </div>
    );
};

export default ReplicaSetsList;