import React from 'react';
import ApexChart from "react-apexcharts";

const BillChart = ({ data }) => {
    const sortedData = data ? [...data].sort((a, b) => Number(a.date.replaceAll("-", "")) - Number(b.date.replaceAll("-", ""))
    ) : null;
    const date = sortedData ? sortedData.map(i => i ? i.date : 0) : Array(5).fill('-');
    const base = sortedData ? sortedData.map(i => i ? i.totalClusterRuntimeCost : 0) : Array(5).fill(0);
    const pod = sortedData ? sortedData.map(i => i ? i.totalPodCost : 0) : Array(5).fill(0);
    const memory = sortedData ? sortedData.map(i => i ? i.totalMemoryCost : 0) : Array(5).fill(0);
    const cpu = sortedData ? sortedData.map(i => i ? i.totalCpuCost : 0) : Array(5).fill(0);

    const total = sortedData ? sortedData.map((_, idx) => base[idx] + pod[idx] + memory[idx] + cpu[idx]) : Array(5).fill(0);

    const wonFormatter = (value) => {
        return `₩${value.toLocaleString().split('.')[0]}`
    }
    const series = [{
            name: 'Base',
            data:  base
        }, {
            name: 'Pod',
            data: pod
        }, {
            name: 'Memory',
            data: memory
        }, {
            name: 'CPU',
            data: cpu
        }]

    const seriesForChart = [{
        name: 'Base',
        data:  base.map( i => i / 10)
    }, {
        name: 'Pod',
        data: pod
    }, {
        name: 'Memory',
        data: memory
    }, {
        name: 'CPU',
        data: cpu
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
            },
        },
        tooltip: {
            y: {
                formatter: (_, { seriesIndex, dataPointIndex }) => {
                    return wonFormatter(series[seriesIndex].data[dataPointIndex])
                },
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },
        },
        dataLabels: {
            formatter: (_, { seriesIndex, dataPointIndex }) => {
                return `${(series[seriesIndex].data[dataPointIndex] / total[dataPointIndex] * 100).toFixed(2)}%`
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
        grid: {
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
                        offsetX: -23,
                        offsetY: -5,
                        enabled: true,
                        formatter: (_, { dataPointIndex }) => wonFormatter(total[dataPointIndex]),
                        style: {
                            fontSize: '10px',
                            fontWeight: 900,
                            color: "#ffffff"
                        }
                    }
                },

            },
        },
        colors: ['#364db7', '#52c4e1', '#ffd05c', '#F5347F'],
        xaxis: {
            type: 'Month',
            categories: date,
            labels : {
                style: {
                    colors: Array(5).fill("#ffffff")
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
                series={seriesForChart}
                type="bar"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default BillChart;