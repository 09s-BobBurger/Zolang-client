import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import React, { useEffect, useState } from "react";
import theme from './theme';

function PieChart(props) {
    const [settings, setSettings] = useState({
        width: 165,
        height: 165,
        value: 0,
        valueMax: 100,
        color: "#000000",
    });

    useEffect(() => {
        if (props.value !== 0) {
            let animationInterval;
            let tempValue = 0;

            const increment = props.max / 100; // 증가량을 1%로 설정

            animationInterval = setInterval(() => {
                if (tempValue < props.value) {
                    tempValue = Math.min(tempValue + increment, props.value);
                    setSettings((prevSettings) => ({
                        ...prevSettings,
                        value: tempValue,
                        valueMax: parseFloat(props.max),
                        color: props.color,
                    }));
                } else {
                    clearInterval(animationInterval);
                }
            }, 30);
        }
    }, [props.value, props.max, props.color]);

    return (
        <div style={{ position: "relative" }}>
            <Gauge theme={theme(settings.color)}
                {...settings}
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 22,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: settings.color,
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                    },
                })}
            />
            <span style={{ position: "absolute", top: "100px", left: "85px", color: "#ABAFBD" }}>
                /{settings.valueMax}
            </span>
        </div>
    );
}

export default PieChart;
