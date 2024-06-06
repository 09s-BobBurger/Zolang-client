import React from "react";
import Total from "./Total";
import Repository from "./Repository";
import ClusterList from "./ClusterList.jsx";
import Bill from "./Bill.jsx";

function dashboardResult(props) {
    return (
        <>
            <div style={{ display: "flex", width: "fit-content",  height: "max-content", justifyContent: "space-between", gap: "30px", maxHeight: "700px", margin: "0 auto"}}>
                <div style={{  minWidth: "280px", display: "flex", flexDirection: "column"}}>
                    <Repository />
                </div>
                <div
                    style={{
                        display: "flex",
                        height: "-webkit-fill-available",
                        minHeight: "690px",
                        flexDirection: "column",
                        gap: "30px"
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            minHeight: "280px",
                            maxHeight: "330px",
                            maxWidth: "700px",
                            // height: "40%"
                        }}>
                        <Total />
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: "-webkit-fill-available",
                            minHeight: "310px",
                            maxWidth: "700px",
                            flexGrow: '1',
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <ClusterList />
                    </div>
                </div>
                <div style={{  width: "360px", display: "flex", flexDirection: "column"}}>
                    <Bill />
                </div>
            </div>
        </>
    );
}

export default dashboardResult;
