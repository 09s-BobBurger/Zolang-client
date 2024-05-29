import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
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

            animationInterval = setInterval(() => {
                if (tempValue < props.value) {
                    tempValue += 50; // 숫자 채워지는 것 조절
                    setSettings((prevSettings) => ({
                        ...prevSettings,
                        value: tempValue,
                        valueMax: parseInt(props.max),
                        color: props.color,
                    }));
                } else {
                    clearInterval(animationInterval);
                }
            }, 30); // 숫자가 클수록 천천히 채워짐
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
