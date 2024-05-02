import React from "react";
import Total from "./Total";
import Repository from "./Repository";

function dashboardResult(props) {
    return (
        <>
            <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
                <div style={{  width: "280px", margin: "15px"}}>
                    <Repository />
                </div>
                <div style={{ width: "60vw", margin: "15px" }}>
                    <Total />
                </div>
            </div>
        </>
    );
}

export default dashboardResult;
