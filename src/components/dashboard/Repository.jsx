import React, { useState, useEffect } from "react";
import axios from "axios";
import RepositoryCard from "./RepositoryCard";
import NewButton from "./NewButton";
import ArrowForwardIos from "../icon/ArrowForwardIos";
import { Link } from "react-router-dom";

function Repository() {
    const [repositories, setRepositories] = useState([
        "Zolang-Client",
        "Zolang-Server",
        "My Repository",
        "Test Repository",
    ]);

    useEffect(() => {
        axios
            .get("#")
            .then((response) => {
                // setRepositories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div
            style={{
                padding: "5px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    padding: "10px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "15px",
                    justifyContent: "space-between",
                    display: "flex",
                }}
            >
                <span
                    style={{
                        paddingTop: "10px",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Repository
                </span>
                <div
                    style={{
                        paddingTop: "10px",
                    }}
                >
                    <NewButton> + New </NewButton>
                </div>
            </div>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                    marginBottom: "15px",
                }}
            />
            <div style={{ position: "relative" }}>
                {repositories.map((repository, index) => (
                    <RepositoryCard key={index} name={repository} />
                ))}
                <div style={{ padding: "15px" }}>
                <Link to="/cd/dashboard" style={{ textDecoration: "none" }}>
                    <span
                        style={{
                            color: "#ABAFBD",
                            fontSize: "14px",
                            position: "absolute",
                            right: "15px",
                            bottom: "1px",
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
