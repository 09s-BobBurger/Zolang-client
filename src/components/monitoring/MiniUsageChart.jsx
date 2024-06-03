import React from 'react';
import ApexChart from "react-apexcharts";

const MiniUsageChart = ({ data, color1, color2, min, max, usage }) => {
    const series = [{
        name : "",
        data: data
    }];

    const options = {
        chart: {
            type: 'area',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        // colors: ['#ffffff'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            show: false,
        },
        grid: {
            row: {
                colors: ['#000'], // takes an array which will be repeated on columns
                opacity: 0.3
            },
            xaxis: {
                lines: {
                    show: false
                },
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: -10,
                right: 10,
                bottom: -10,
                left: 0
            }
        },
        markers: {
            size: 0,
            hover: {
                size: undefined,
                sizeOffset: 3
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: "vertical",
                colorStops: [
                    {
                    offset: 50,
                    color: color1
                    },
                    {
                        offset: 100,
                        color: color2
                    }],
            },
        },
        xaxis: {
            labels : {
                show: false
            },
            axisTicks : {
                show: false
            },
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            min: min,
            max: max,
            labels : {
                show : false
            },
            axisTicks : {
                show: false
            },
            axisBorder: {
                show: false
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            },
        },
        tooltip: {
            enabled: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        }
    }

    return (
        <div
            style={{
                width: '100px',
                height: '70px',
                position: 'relative'
            }}
        >
            <p
                style={{
                    position: "absolute",
                    zIndex: 1,
                    fontWeight: "bold",
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'rgba(255, 255, 255, 0.8)'
                }}
            >{usage}</p>
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

export default MiniUsageChart;