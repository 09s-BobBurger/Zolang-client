import React from 'react';
import ApexChart from "react-apexcharts";

const BillChart = () => {
    const series = [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21]
        }, {
            name: 'PRODUCT D',
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
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        xaxis: {
            type: 'Month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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
                 padding: '20px',
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