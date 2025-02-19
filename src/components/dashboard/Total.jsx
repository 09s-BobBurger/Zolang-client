import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { customizedAxios as axios } from "../../util/customizedAxios.js";

function total(props) {
    const [period, setPeriod] = React.useState(0);
    const [value, setValue] = useState({});

    useEffect(() => {
        loadData();
    }, [period]);

    const loadData = () => {
        const url =
            period === 0
                ? "/api/v1/user/dashboard/usage"
                : "/api/v1/user/dashboard/usage/average";

        axios
            .get(url)
            .then((res) => {
                setValue(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

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
                height: "-webkit-fill-available",
                margin: 0
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    justifyContent: "space-between",
                    display: "flex",
                    borderBottom: "1px solid #474B59",
                    paddingBottom: "12px",
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
                        <MenuItem value={0}>Now</MenuItem>
                        <MenuItem value={1}>Last 1 day</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                {value ? (
                    <div
                        className="scroll-container"
                        style={{
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            margin: "0 auto"
                        }}
                    >
                        <div>
                            <PieChart
                                color="#F5347F"
                                value={value.cpuUsage ? value.cpuUsage : 0}
                                max={
                                    value.cpuAllocatable
                                        ? value.cpuAllocatable
                                        : 0
                                }
                                decimalPlaces={2}
                                unit="m"
                            />
                            <span
                                style={{
                                    color: "#ffffff",
                                    fontSize: "12px",
                                }}
                            >
                                CPU
                            </span>
                        </div>
                        <div>
                            <PieChart
                                color="#ffd05c"
                                value={
                                    value.memoryUsage ? value.memoryUsage / 10 ** 9 : 0
                                }
                                max={value.memoryAllocatable? value.memoryAllocatable / 10 ** 9 : 0}
                                decimalPlaces={2}
                                unit="Gi"
                            />
                            <span
                                style={{
                                    color: "#ffffff",
                                    fontSize: "12px",
                                }}
                            >
                                Memory
                            </span>
                        </div>
                        <div>
                            <PieChart
                                color="#52c4e1"
                                value={value.podUsage ? value.podUsage : 0}
                                max={
                                    value.podAllocatable
                                        ? value.podAllocatable
                                        : 0
                                }
                                decimalPlaces={0}
                                unit=""
                            />
                            <span
                                style={{
                                    color: "#ffffff",
                                    fontSize: "12px",
                                }}
                            >
                                Pods
                            </span>
                        </div>
                    </div>
                ) : (
                    <div
                        style={{
                            textAlign: "-webkit-center",
                            paddingTop: "10px",
                            justifyContent: "center",
                        }}
                    >
                        <img src="텅.svg" width="80px" alt="이미지" />
                    </div>
                )}
            </div>
            <br />
        </div>
    );
}

export default total;
