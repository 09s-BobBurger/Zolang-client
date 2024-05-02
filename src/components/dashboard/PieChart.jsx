import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function PieChart(props) {
    const [settings, setSettings] = useState({
        width: 180,
        height: 180,
        value: 0,
        valueMax: 100,
        color: "#000000",
    });

    useEffect(() => {
        if (props.value !== 0) {
            setSettings((prevSettings) => ({
                ...prevSettings,
                value: parseInt(props.value),
                valueMax: parseInt(props.max),
                color: props.color,
            }));
        }
    }, [props.value, props.max, props.color]);

    return (
        <div style={{position: "relative",}}>
            <Gauge theme={theme(settings.color)}
                {...settings}
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 24,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: settings.color,
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                    },
                })}
            />
            <span  style={{ position: "absolute", top:"100px", left: "85px", color: "#ABAFBD"}}>/{settings.valueMax} </span>
        </div>
    );
}

export default PieChart;
