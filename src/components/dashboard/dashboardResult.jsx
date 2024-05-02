import React from "react";
import Total from "./Total";
import Repository from "./Repository";
import ClusterList from "./ClusterList.jsx";

function dashboardResult(props) {
    return (
        <>
            <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
                <div style={{  width: "280px", margin: "15px"}}>
                    <Repository />
                </div>
                <div style={{ display: "flex", width: "60vw", height: "100vh", flexDirection: "column"}}>
                    <div style={{ margin: "15px" }}>
                        <Total />
                    </div>
                    <div style={{ margin: "15px"}}>
                        <ClusterList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default dashboardResult;
