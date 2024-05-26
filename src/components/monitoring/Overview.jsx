import React, { useState, useEffect } from "react";
import Chart from "./nodes/Chart.jsx";
import InnerNodes from "./InnerNodes.jsx";
import Pods from "./Pods.jsx";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import { useSelector } from "react-redux";

const Overview = (data) => {
    const [usage, setUsage] = useState();
    const clusterId = useSelector((state) => state.cluster.clusterId);

    useEffect(() => {
        axios
            .get(
                `/api/v1/cluster/${clusterId}/usage`,
            )
            .then((res) => {
                setUsage(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    return (
        <div className="overview-content">
            <div
                        style={{
                            padding: "15px",
                        outline: "1px solid #ABAFBD",
                        borderRadius: "10px",
                        background: "#2E3240",
                        justifyContent: "center",
                        height: "auto",
                        overflow: "auto",
                        width: "77vw",
                        }}
                    >
                        {usage && (
                            <div style= {{display: "flex", paddingBottom: "5px",justifyContent: "space-between", flexWrap: "wrap"}}>
                                <Chart
                                    title="CPU"
                                    values={[
                                        {
                                            name: "Capacity",
                                            value: usage.cpuCapacity,
                                        },
                                        {
                                            name: "Allocatable",
                                            value: usage.cpuAllocatable,
                                        },
                                        {
                                            name: "Usage",
                                            value: usage.cpuUsage,
                                        },
                                    ]}
                                    fullValue={usage.cpuCapacity}
                                    colors={["#019CF6", "#256CD6"]}
                                    number={1}
                                />
                                <Chart
                                    title="Memory"
                                    values={[
                                        {
                                            name: "Capacity",
                                            value: usage.memoryCapacity,
                                        },
                                        {
                                            name: "Allocatable",
                                            value: usage.memoryAllocatable,
                                        },
                                        {
                                            name: "Usage",
                                            value: usage.memoryUsage,
                                        },
                                    ]}
                                    fullValue={usage.memoryCapacity}
                                    colors={["#019CF6", "#256CD6"]}
                                    number={2}
                                />
                                <Chart
                                    title="Pod"
                                    values={[
                                        {
                                            name: "Capacity",
                                            value: usage.podCapacity,
                                        },
                                        {
                                            name: "Allocatable",
                                            value: usage.podAllocatable,
                                        },
                                        {
                                            name: "Usage",
                                            value: usage.podUsage,
                                        },
                                    ]}
                                    fullValue={usage.podCapacity}
                                    colors={["#019CF6", "#256CD6"]}
                                    number={3}
                                />
                            </div>
                        )}
                    </div>
            <div style={{flex: "1"}}> 
            <Pods />
            </div>
            <div style={{flex: "1"}}> 
            <InnerNodes />
            </div>
        </div>
    );
};

export default Overview;
