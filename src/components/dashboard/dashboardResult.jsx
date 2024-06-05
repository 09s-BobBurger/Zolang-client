import React from "react";
import Total from "./Total";
import Repository from "./Repository";
import ClusterList from "./ClusterList.jsx";
import Bill from "./Bill.jsx";

function dashboardResult(props) {
    return (
        <>
            <div style={{ display: "flex", height: "100%", justifyContent: "space-between", gap: "30px", maxWidth: "1320px", width: "fit-content", maxHeight: "694px"}}>
                <div style={{  minWidth: "280px", height: "-webkit-fill-available"}}>
                    <Repository />
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "60vw",
                        height: "-webkit-fill-available",
                        minHeight: "690px",
                        minWidth: "540px",
                        flexDirection: "column",
                        gap: "5%"
                    }}
                >
                    <div style={{
                            minHeight: "280px",
                            maxHeight: "330px",
                            minWidth: "540px",
                            maxWidth: "700px",
                            height: "40%"
                        }}>
                        <Total />
                    </div>
                    <div style={{
                            minHeight: "300px",
                            minWidth: "540px",
                            maxWidth: "700px",
                            height: "51%"
                            }}>
                        <ClusterList />
                    </div>
                </div>
                <div style={{  minWidth: "280px", height: "-webkit-fill-available"}}>
                    <Bill />
                </div>
            </div>
        </>
    );
}

export default dashboardResult;
