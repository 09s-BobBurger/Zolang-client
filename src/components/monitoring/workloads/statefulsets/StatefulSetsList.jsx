import React, {useEffect, useState} from 'react';
import ControllerTable from "../ControllerTable.jsx";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";

const StatefulSetsList = ({ setSelectedStateful }) => {
    const [statefulSets, setStatefulSets] = useState({});
    const [prevToken, setPrevToken] = useState();
    const [currToken, setCurrToken] = useState(" ");
    const [nextToken, setNextToken] = useState();
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);
    const loadData = () => {
        const isNamespaceAll = namespace === "All";
        const tokenParam = currToken.length > 1 ? `continue_token=${currToken}` : "";
        const baseUrl = `/api/v1/cluster/${clusterId}/workload/statefuls`;

        const url = isNamespaceAll
            ? `${baseUrl}${tokenParam ? `?${tokenParam}` : ""}`
            : `${baseUrl}/namespace?namespace=${namespace}${tokenParam ? `&${tokenParam}` : ""}`;

        axios.get(url)
            .then((res) => {
                setStatefulSets(res.data.data ? res.data.data : {});
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
        if (statefulSets.start === 1) {
            setPrevToken(null);
        }
        if (statefulSets.end === statefulSets.total) {
            setNextToken(null);
        } else {
            setNextToken(statefulSets.continueToken);
        }
    }, [statefulSets]);

    const onClickRow = (data) => {
        setSelectedStateful(data);
    }

    return (
        <div className="dashboard-content">
            <ControllerTable
                data={statefulSets}
                onClickRow={onClickRow}
                toPrevPage={toPrevPage}
                toNextPage={toNextPage}
                prevToken={prevToken}
                nextToken={nextToken}
            />
        </div>
    );
};

export default StatefulSetsList;