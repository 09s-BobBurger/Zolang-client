import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import React, { useEffect, useState } from "react";
import theme from './theme';

function PieChart(props) {
    const [settings, setSettings] = useState({
        width: 165,
        height: 165,
        value: 0,
        valueMax: props.max,
        color: "#000000",
    });

    useEffect(() => {
        if (props.value !== 0) {
            let animationInterval;
            let tempValue = 0;

            const increment = props.max / 100 < 1 && props.decimalPlaces === 0 ? 1 : parseFloat((props.max / 100).toFixed(props.decimalPlaces));

            animationInterval = setInterval(() => {
                if (tempValue < props.value) {
                    tempValue = Math.min(tempValue + increment, props.value);
                    setSettings((prevSettings) => ({
                        ...prevSettings,
                        value: tempValue,
                        valueMax: props.max,
                        color: props.color,
                    }));
                } else {
                    clearInterval(animationInterval);
                }
            }, 30);
        } else {
            setSettings(
                {
                    ...settings,
                    value: 0,
                    valueMax: 1
                }
            )
        }
    }, [props.value, props.max, props.color]);

    return (
        <div style={{ position: "relative" }}>
            <Gauge theme={theme(settings.color)}
                   text={
                       ({ value }) => value.toFixed(props.decimalPlaces) + props.unit
                   }
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
            <span style={{ position: "absolute", top: "100px", left: "125px", color: "#ABAFBD", fontSize: 16, transform: 'translate(-100%, 0)' }}>
                /{ (props.max? settings.valueMax : 0).toFixed(props.decimalPlaces) + props.unit}
            </span>
        </div>
    );
}

export default PieChart;
