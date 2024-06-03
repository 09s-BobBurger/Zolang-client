import React from 'react';
import ApexChart from "react-apexcharts";

const BillChart = ({ data }) => {
    const sortedData = data ? [...data].sort((a, b) => Number(a.date.replaceAll("-", "")) - Number(b.date.replaceAll("-", ""))
    ) : null;
    const date = sortedData ? sortedData.map(i => i.date) : Array(5).fill('-');
    const total = sortedData ? sortedData.map(i => i.totalCost) : Array(5).fill('0');
    const base = sortedData ? sortedData.map(i => i.totalCost - i.totalCpuCost - i.totalMemoryCost - i.totalPodCost)
        : Array(5).fill(0);
    const pod = sortedData ? sortedData.map(i => i.totalPodCost) : Array(5).fill(0);
    const memory = sortedData ? sortedData.map(i => i.totalMemoryCost) : Array(5).fill(0);
    const cpu = sortedData ? sortedData.map(i => i.totalCpuCost) : Array(5).fill(0);

    const wonFormatter = (value) => {
        return `₩${value.toLocaleString().split('.')[0]}`
    }
    const series = [{
            name: 'Base',
            data:  base.map(i => i ? i : 0)
        }, {
            name: 'Pod',
            data: pod.map(i => i ? i : 0)
        }, {
            name: 'Memory',
            data: memory.map(i => i ? i : 0)
        }, {
            name: 'CPU',
            data: cpu.map(i => i ? i : 0)
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
                formatter: value => wonFormatter(value),
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },
        },
        dataLabels: {
            formatter: (value, { dataPointIndex }) => `${(value / total[dataPointIndex] * 100).toFixed(2)}%`
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
                        formatter: value => wonFormatter(value),
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
                series={series}
                type="bar"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default BillChart;