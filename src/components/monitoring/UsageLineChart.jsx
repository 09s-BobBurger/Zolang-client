import React from 'react';
import ApexChart from "react-apexcharts";

const UsageLineChart = ({title, data, time, color, yAxis, yFormat}) => {
    const series = [{
        name : title,
        data : data
    }];
    const options = {
            chart: {
                height: 350,
                type: 'area',
                zoom: {
                    enabled: false
                }
            },
            colors: [color],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: title,
                align: 'left',
                style: {
                    color: '#ffffff',
                    fontSize: '20px'
                }
            },
            grid: {
                row: {
                    colors: ['transparent'], // takes an array which will be repeated on columns
                    opacity: 0.1
                },
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: time,
                labels: {
                    style: {
                        colors: '#ffffff'
                    },
                },
            },
            yaxis: {
                show: 'true',
                title: {
                    text: yAxis,
                    style : {
                        color: '#ffffff'
                    }
                },
                labels: {
                    style: {
                        colors: ['#ffffff']
                    },
                    formatter : yFormat
                }
            },
            fill: {
                colors: [color],
                type: 'gradient',
                gradient: {
                    type: "vertical",
                    // opacityFrom: 0.80,
                    // opacityTo: 0.1,
                    stops: [0, 100, 100]
                },
            },
    }

    return (
        <div className="chart-container"
             style={{
                 width: '50%',
                 height: '300px',
                 padding: '20px',
                 overflowX: 'auto',
                 overflowY: 'hidden',
                 position: 'relative'
            }}
        >
            {
                data.every(element => element === 0) &&
                <div
                    style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div
                        style={{
                            background: '#ffffff',
                            color: "rgb(56, 60, 74)",
                            textAlign: "center",
                            padding: "20px 30px",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: 'column',
                            gap: "10px",
                            alignItems: "center"
                        }}
                    >
                        <img src="../../../no_metrics.svg" alt="there's no usage"
                             style={{
                                 width: "50px"
                             }}
                        />
                        <span>
                            Install Metrics to view usages.
                            <br/>If you've already installed it, please wait...
                        </span>
                    </div>
                </div>
            }
            <ApexChart
                options={options}
                series={series}
                type="area"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default UsageLineChart;