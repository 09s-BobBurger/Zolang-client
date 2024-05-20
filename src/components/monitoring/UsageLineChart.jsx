import React from 'react';
import ApexChart from "react-apexcharts";

const UsageLineChart = ({title, data, time, color, yAxis}) => {
    const series = [{
        name : title,
        data : data
    }];
    const options = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            colors: [color],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
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
                    }
                }

            },
            yaxis: {
                show: 'true',
                labels: {
                    style: {
                        colors: ['#ffffff']
                    }
                }
            }
    }

    return (
        <div className="chart-container"
             style={{
                 width: '50%',
                 height: '300px',
                 padding: '20px',
                 overflowX: 'auto',
                 overflowY: 'hidden',
            }}
        >
            <ApexChart
                options={options}
                series={series}
                type="line"
                width="580"
                height="300"
            />
        </div>
    );
};

export default UsageLineChart;