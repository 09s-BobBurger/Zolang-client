import React, { useState, useEffect } from "react";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import RepositoryCard from "./RepositoryCard";
import ArrowForwardIos from "../icon/ArrowForwardIos";
import { Link } from "react-router-dom";

function Repository() {
    const [repositories, setRepositories] = useState([]);
    const [cluster, setCluster] = useState(null);

    const loadData = () => {
        axios.get(`/api/v1/cicd` )
        .then((res) => {
            setRepositories(res.data.data);
        }).catch((err) => {
        console.log(err)
        })
        axios.get(`/api/v1/cluster`)
            .then((res) => {
                const findZolangCluster = res.data.data;
                const zolangCluster = findZolangCluster.filter(cluster => cluster.provider === 'zolang');
                if (zolangCluster.length > 0 && zolangCluster[0].status === 'ready') {
                    setCluster(zolangCluster[0]);
                } else {
                    setCluster(null);
                }
            }).catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div
            style={{
                padding: "20px 25px 10px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                position: "relative",
                // minHeight : "635px",
                flexGrow: "1"
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    justifyContent: "space-between",
                    display: "flex",
                    borderBottom: "1px solid #474B59",
                    paddingBottom: "12px"
                }}
            >
                <span
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Repository
                </span>
                <div style={{marginTop: "7px"}}>
                {cluster ? (
                    <Link to="/cd/build" style={{ textDecoration: "none" }}>
                        <button className="new-cluster-button">+ new</button>
                    </Link>
                ) : (
                    <Link to="/cd/repoList" style={{ textDecoration: "none" }}>
                        <button className="new-cluster-button">+ new</button>
                    </Link>
                )}
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "19px",
                    alignItems: "center",
                    paddingTop: "11px"
                }}
            >
                {repositories? repositories.map((repository, index) => (
                    <RepositoryCard key={index} repository={repository} />
                )):null}
                <div style={{ padding: "15px" }}>
                    <Link to="/cd/repoList" style={{ textDecoration: "none" }}>
                        <span
                            style={{
                                color: "#ABAFBD",
                                fontSize: "14px",
                                position: "absolute",
                                right: "15px",
                                bottom: "10px",
                                margin: "5px",
                            }}
                        >
                            더보기 <ArrowForwardIos />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Repository;
