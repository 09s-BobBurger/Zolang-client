import React from "react";
import Chart from "./Chart.jsx";
import InnerNodes from "./InnerNodes.jsx";
import Pods from "./Pods.jsx";
import { cusomizedAxios as axios } from "../../util/customizedAxios.js";

const Overview = (data) => {
    const clusterId = data.clusterId;

    useEffect(() => {
        axios
            .get(
                `/api/v1/cluster/${clusterId}/workload/overview`,
                {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                }
            )
            .then((res) => {
                let clustersList = res.data.data;
                for (let i = 0; i < clustersList.length; i++) {
                    axios
                        .get(
                            `/api/v1/cluster/${clustersList[i].clusterId}/status`
                        )
                        .then((res) => {
                            clustersList[i].status = res.data.data;
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                setClusters(clustersList);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    return (
        <div className="overview-content">
            <div style={{
                display: "flex",
                gap: "30px",
                height: 'auto',
                width: 'calc((100vw) / 100* 75)',
                overflow: 'scroll',
                overflowY: 'hidden',
                overflowX: 'auto',
            }}>
                <Chart
                    title="CPU allocation"
                    values={[
                        { name: "Requests", value: 1.34 },
                        { name: "Limits", value: 0.25 },
                    ]}
                    fullValue={2.0}
                    colors={['#ff177f', '#ff7eb6']}
                />
                <Chart
                    title="Memory allocation"
                    values={[
                        { name: "Requests", value: 526.00 },
                        { name: "Limits", value: 404.00 },
                    ]}
                    fullValue={2.0}
                    colors={['#FFb701', '#Fedf04']}
                />
                <Chart
                    title="Pods allocation"
                    values={[
                        { name: "Requests", value: 24 },
                        { name: "Limits", value: 100 },
                    ]}
                    fullValue={2.0}
                    colors={['#00a0ff', '#4cbcff']}
                />
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
