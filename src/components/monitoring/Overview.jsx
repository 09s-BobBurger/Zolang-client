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
                            minWidth: "1100px"
                        }}
                    >
                        {usage != null && (
                            <div style= {{display: "flex", paddingBottom: "5px",justifyContent: "space-between", flexWrap: "wrap",}}>
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
                                            value: usage.cpuUsage? usage.cpuUsage: 0,
                                        },
                                    ]}
                                    fullValue={usage.cpuCapacity}
                                    number={0}
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
                                            value: usage.memoryUsage? usage.memoryUsage: 0,
                                        },
                                    ]}
                                    fullValue={usage.memoryCapacity}
                                    number={1}
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
                                            value: usage.podUsage? usage.podUsage: 0,
                                        },
                                    ]}
                                    fullValue={usage.podCapacity}
                                    number={2}
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
