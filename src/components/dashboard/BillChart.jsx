import React from 'react';
import ApexChart from "react-apexcharts";

const BillChart = () => {
    const date = ["5.27", "5.28", "5.29", "5.30", "5.31"]
    const series = [{
            name: 'Base',
            data: [44, 55, 41, 67, 22]
        }, {
            name: 'Pod',
            data: [13, 23, 20, 8, 13]
        }, {
            name: 'Memory',
            data: [11, 17, 15, 15, 21]
        }, {
            name: 'CPU',
            data: [21, 7, 25, 13, 22]
        }]
    const options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            formatter: (value) => `$${value}`
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        grid: {
            // row: {
            //     colors: ['#000'], // takes an array which will be repeated on columns
            //     opacity: 0.3
            // },
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
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 8,
                columnWidth: '60%',
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                    position: 'top',
                    total: {
                        offsetX: -21,
                        offsetY: -5,
                        enabled: true,
                        formatter: (value) => `$${value}`,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900,
                            color: "#ffffff"
                        }
                    }
                },

            },
        },
        colors: ['#1f233a', '#4c4888', '#af496d', '#e19f26'],
        xaxis: {
            type: 'Month',
            categories: date,
            labels : {
                style: {
                    colors: Array(date.length).fill("#ffffff")
                }
            }
        },
        yaxis: {
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
        legend: {
            show: false,
            position: 'right',
            // offsetY: 40
        },
        fill: {
            opacity: 1
        }
    }

    return (
        <div
             style={{
                 height: '300px',
                 overflowX: 'auto',
                 overflowY: 'hidden',
             }}
        >
            <ApexChart
                options={options}
                series={series}
                type="bar"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default BillChart;