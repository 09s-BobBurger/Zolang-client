import React from 'react';
import ApexChart from 'react-apexcharts';
import { RadialBar } from 'apexcharts';

const Chart = ({ title, values, fullValue, colors }) => {

    const series = values.map(item => item.value/fullValue * 100);

    const options = {
        chart: {
            type: 'radialBar',
            width: 180, // Set chart width to 500 pixels
            height: 250, // Set chart height to 250 pixels
            aspectRatio: 4, // Maintain a 2:1 aspect ratio
        },
        colors: colors? colors: ['#019CF6', '#256CD6'],
        plotOptions: {
            radialBar: {
                inverseOrder: false,
                startAngle: 0,
                endAngle: 360,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    size: '30%',
                    background: 'transparent',
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    imageClipped: true,
                    position: 'front',
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: '#474B59',
                    opacity: 1,
                    margin: 2,
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0
                    }
                },
                dataLabels: {
                    show: false
                }
            }
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            formatter: function(seriesName, opts) {
                if (opts.seriesIndex < series.length) return `
                    <div class="legend-item-label">${seriesName}</div>
                    <div class="legend-item-value">${values[opts.seriesIndex].value}</div>
                `;
                else return `
                    <div class="legend-item-label">${seriesName}</div>
                    <div class="legend-item-value">${fullValue}</div>
                `;
            },
            markers: {
                radius: 4,
            },
            labels: {
                colors: 'white'
            }
        },
        labels: [...values.map(item => item.name), 'Capacity'],
        onItemClick: {
            toggleDataSeries: false
        },
        onItemHover: {
            highlightDataSeries: false
        },
    }

    return (
        <div className="chart-container">
            <p className="chart-title">{title}</p>
            <ApexChart
                options={options}
                series={series}
                type="radialBar"
                width={288}
                height={302}
                />
        </div>
    );
};

export default Chart;