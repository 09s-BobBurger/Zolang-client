import React from "react";
import Total from "./Total";
import Repository from "./Repository";
import ClusterList from "./ClusterList.jsx";

function dashboardResult(props) {
    return (
        <>
            <div style={{ display: "flex", height: "100%"}}>
                <div style={{  width: "300px", margin: "15px", height: "70%"}}>
                    <Repository />
                </div>
                <div style={{ display: "flex", width: "60vw", flexDirection: "column", gap: "30px"}}>
                    <div style={{ margin: "15px", height: "35%" }}>
                        <Total />
                    </div>
                    <div style={{ margin: "15px", height: "40%"}}>
                        <ClusterList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default dashboardResult;
