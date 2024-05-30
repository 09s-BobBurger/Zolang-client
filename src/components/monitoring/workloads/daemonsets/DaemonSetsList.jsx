import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerTable from "../ControllerTable.jsx";

const DaemonSetsList = ({ setSelectedDaemon }) => {
    const [daemonSets, setDaemonSets] = useState({});
    const [prevToken, setPrevToken] = useState();
    const [currToken, setCurrToken] = useState(" ");
    const [nextToken, setNextToken] = useState();
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);
    const loadData = () => {
        const isNamespaceAll = namespace === "All";
        const tokenParam = currToken.length > 1 ? `continue_token=${currToken}` : "";
        const baseUrl = `/api/v1/cluster/${clusterId}/workload/daemons`;

        const url = isNamespaceAll
            ? `${baseUrl}${tokenParam ? `?${tokenParam}` : ""}`
            : `${baseUrl}/namespace?namespace=${namespace}${tokenParam ? `&${tokenParam}` : ""}`;

        axios.get(url)
            .then((res) => {
                setDaemonSets(res.data.data ? res.data.data : {});
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
        if (daemonSets.start === 1) {
            setPrevToken(null);
        }
        if (daemonSets.end === daemonSets.total) {
            setNextToken(null);
        } else {
            setNextToken(daemonSets.continueToken);
        }
    }, [daemonSets]);

    const onClickRow = (data) => {
        setSelectedDaemon(data);
    }

    return (
        <div className="dashboard-content">
            <ControllerTable
                data={daemonSets}
                onClickRow={onClickRow}
                toPrevPage={toPrevPage}
                toNextPage={toNextPage}
                prevToken={prevToken}
                nextToken={nextToken}
            />
        </div>
    );
};

export default DaemonSetsList;