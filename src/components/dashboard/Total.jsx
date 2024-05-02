import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function total(props) {
    const [period, setPeriod] = React.useState("");
    const [listValue, setListValue] = useState({
        cpu: 700,
        maxCpu: 1000,
        memory: 600,
        maxMemory: 1500,
        pods: 800,
        maxPods: 1000,
        total: 0,
    });

    useEffect(() => {
        setListValue((prevState) => ({
            ...prevState,
            total: prevState.cpu + prevState.memory + prevState.pods,
        }));
    }, [listValue.cpu, listValue.memory, listValue.pods]);

    const handleChange = (event) => {
        setPeriod(event.target.value);
    };
    return (
        <div
            style={{
                padding: "20px 25px 10px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                height: "100%"
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    justifyContent: "space-between",
                    display: "flex",
                    borderBottom: "1px solid #474B59",
                    paddingBottom: "12px"
                }}
            >
                <span
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Total
                </span>
                <FormControl
                    sx={{ minWidth: 140 }}
                    size="small"
                    style={{
                        backgroundColor: "#474B59",
                        textAlign: "center",
                        margin: 0,
                    }}
                >
                    <InputLabel
                        id="demo-select-small-label"
                        style={{ color: "#ffffff" }}
                    >
                        Period
                    </InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={period}
                        label="period"
                        onChange={handleChange}
                        style={{
                            color: "#ffffff",
                            padding: 0,
                        }}
                    >
                        <MenuItem value={7}>Last 7 days</MenuItem>
                        <MenuItem value={30}>Last 30 days</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ display: "flex" }}>
                <div
                    className="scroll-container"
                    style={{
                        display: "flex",
                        textAlign: "center",
                        flex: 8,
                        overflow: "auto",
                    }}
                >
                    <div style={{ width: "1vw" }}></div>
                    <div style={{ flex: 3 }}>
                        <PieChart
                            color="#019CF6"
                            value={listValue.cpu}
                            max={listValue.maxCpu}
                        />
                        <span style={{ color: "#ffffff", fontSize: "12px" }}>
                            CPU
                        </span>
                    </div>
                    <div style={{ width: "1vw" }}></div>
                    <div style={{ flex: 3 }}>
                        <PieChart
                            color="#FFD600"
                            value={listValue.memory}
                            max={listValue.maxMemory}
                        />
                        <span style={{ color: "#ffffff", fontSize: "12px" }}>
                            Memory
                        </span>
                    </div>
                    <div style={{ width: "1vw" }}></div>
                    <div style={{ flex: 3 }}>
                        <PieChart
                            color="#FF824D"
                            value={listValue.pods}
                            max={listValue.maxPods}
                        />
                        <span style={{ color: "#ffffff", fontSize: "12px" }}>
                            Pods
                        </span>
                    </div>
                    <div style={{ width: "1vw" }}></div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default total;
