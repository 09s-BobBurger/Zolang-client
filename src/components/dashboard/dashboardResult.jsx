import React from "react";
import Total from "./Total";
import Repository from "./Repository";
import ClusterList from "./ClusterList.jsx";
import Bill from "./Bill.jsx";

function dashboardResult(props) {
    return (
        <>
            <div style={{ display: "flex", height: "100%", justifyContent: "space-between"}}>
                <div style={{  width: "360px", margin: "15px", height: "90%"}}>
                    <Repository />
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "60vw",
                        height: "100%",
                        flexDirection: "column",
                        gap: "30px"
                    }}
                >
                    <div style={{ margin: "15px", height: "35%"}}>
                        <Total />
                    </div>
                    <div style={{ margin: "15px", height: "46.6%"}}>
                        <ClusterList />
                    </div>
                </div>
                <div style={{  width: "360px", margin: "15px", height: "90%"}}>
                    <Bill />
                </div>
            </div>
        </>
    );
}

export default dashboardResult;
