import React from "react";
import RepositoryCard from "./RepositoryCard";
import NewButton from "./NewButton";
import ArrowForwardIos from "../icon/ArrowForwardIos";

function Repository(props) {
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
            <div style={{position: "relative"}}>
                <RepositoryCard
                    name="Zolang-Client"
                    time="9.3s"
                    age="2 months"
                    status="good"
                />
                <RepositoryCard
                    name="My Repository"
                    time="9.3s"
                    age="2 months"
                    status="well"
                />
                <RepositoryCard
                    name="My Repository"
                    time="9.3s"
                    age="2 months"
                    status="bad"
                />
                <RepositoryCard
                    name="My Repository"
                    time="9.3s"
                    age="2 months"
                    status="good"
                />
                <div style={{padding: "15px"}}>
                <span style={{color: "#ABAFBD", fontSize: "14px", position: "absolute", right: "15px", bottom: "1px", margin: "5px"}}>더보기 <ArrowForwardIos/></span>
                </div>
            </div>
        </div>
    );
}

export default Repository;
