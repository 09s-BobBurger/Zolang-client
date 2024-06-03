import React from "react";
import Total from "./Total";
import Repository from "./Repository";
import ClusterList from "./ClusterList.jsx";
import Bill from "./Bill.jsx";

function dashboardResult(props) {
    return (
        <>
            <div style={{ display: "flex", height: "100%", justifyContent: "space-between", gap: "30px", maxWidth: "1300px", maxHeight: "-webkit-fill-available"}}>
                <div style={{  minWidth: "280px", height: "100%"}}>
                    <Repository />
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "60vw",
                        height: "100%",
                        minHeight: "690px",
                        minWidth: "540px",
                        flexDirection: "column",
                        gap: "30px"
                    }}
                >
                    <div style={{
                            minHeight: "260px",
                            maxHeight: "330px",
                            minWidth: "540px",
                            maxWidth: "700px",
                            height: "40%"}}>
                        <Total />
                    </div>
                    <div style={{
                            minHeight: "300px",
                            minWidth: "540px",
                            maxWidth: "700px",
                            height: "60%"}}>
                        <ClusterList />
                    </div>
                </div>
                <div style={{  minWidth: "280px", height: "100%"}}>
                    <Bill />
                </div>
            </div>
        </>
    );
}

export default dashboardResult;
