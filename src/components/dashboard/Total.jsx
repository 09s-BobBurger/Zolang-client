import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function total(props) {
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

    const [period, setPeriod] = React.useState("");

    const handleChange = (event) => {
        setPeriod(event.target.value);
    };
    return (
        <div
            style={{
                padding: "5px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    padding: "10px",
                    paddingLeft: "5px",
                }}
            >
                <span
                    style={{
                        paddingLeft: "15px",
                        paddingTop: "10px",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Total
                </span>
                <hr
                    style={{
                        width: "98%",
                        border: 0,
                        height: "1px",
                        backgroundColor: "#474B59",
                    }}
                />
            </div>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: "15px",
                        paddingRight: "20px"
                    }}
                >
                    <FormControl
                        sx={{ m: 1, minWidth: 100 }}
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
                            <MenuItem value={10}>This Month</MenuItem>
                            <MenuItem value={20}>This Quarter</MenuItem>
                            <MenuItem value={30}>This Year</MenuItem>
                        </Select>
                    </FormControl>
                    <div style={{ lineHeight: "120%" }}>
                        <span style={{ fontSize: "48px", color: "#ffffff" }}>
                            {listValue.total}
                        </span>
                        <br />
                        <span style={{ fontSize: "12px", color: "#ffffff" }}>
                            in use
                        </span>
                    </div>
                </div>
                <div className="scroll-container"
                    style={{
                        display: "flex",
                        textAlign: "center",
                        flex: 8,
                        overflowX: "auto",
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
