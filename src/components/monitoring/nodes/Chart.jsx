import React from "react";
import ApexChart from "react-apexcharts";
import { RadialBar } from "apexcharts";

const Chart = ({ title, values, fullValue, number }) => {
    const convertToBytes = (value) => {
        if (value < 1024) {
            return value;
        } else if (value < 1024 * 1024) {
            return (value / 1024).toFixed(2) + " KB";
        } else if (value < 1024 * 1024 * 1024) {
            return (value / (1024 * 1024)).toFixed(2) + " MB";
        } else {
            // 1GB 이상인 경우 GB로 변환합니다.
            return (value / (1024 * 1024 * 1024)).toFixed(2) + " GB";
        }
    };

    const labels = values.map((item) => {
        const value = item.value;
        const convertedValue = convertToBytes(value);
        return `${item.name}: ${convertedValue}`;
    });

    // 시리즈(series) 설정
    const series = values.map((item) => (item.value / fullValue) * 100);

    const color = [
        ["#bc75f9", "#a992fa"],
        ["#ff9500", "#ff9472"],
        ["#ff61be", "#ff9de6"],
        ["#00c2ba", "#09fbd3"],
    ];

    const options = {
        chart: {
            type: "radialBar",
            width: 200,
            height: 200,
            aspectRatio: 4,
        },
        colors: color[number],
        plotOptions: {
            radialBar: {
                inverseOrder: false,
                startAngle: 0,
                endAngle: 360,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    size: "30%",
                    background: "transparent",
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    imageClipped: true,
                    position: "front",
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5,
                    },
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: "#474B59",
                    opacity: 1,
                    margin: 2,
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0,
                    },
                },
                dataLabels: {
                    show: false,
                },
            },
        },
        legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "left",
            formatter: function (seriesName, opts) {
                return `<div class="legend-item-label">${
                    labels[opts.seriesIndex]
                }</div>`;
            },
            markers: {
                radius: 2,
            },
            labels: {
                colors: "white",
            },
        },
        labels: labels,
        onItemClick: {
            toggleDataSeries: false,
        },
        onItemHover: {
            highlightDataSeries: false,
        },
    };

    return (
        <div
            className="chart-container"
            style={{ width: "200px", height: "250px" }}
        >
            <p className="chart-title">
                {title.split("-")[1] ? title.split("-")[1] : title}
            </p>
            <ApexChart
                options={options}
                series={series}
                type="radialBar"
                width="200px"
                height="250px"
            />
        </div>
    );
};

export default Chart;
