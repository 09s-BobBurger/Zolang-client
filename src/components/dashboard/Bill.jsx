import React, {useState} from 'react';
import BillChart from "./BillChart.jsx";
import "../../styles/DASHBOARD.css";
import BillsTable from "./BillsTable.jsx";
// import {customizedAxios as axios} from "../../util/customizedAxios.js";

const Bill = () => {
    const [fee, setFee] = useState(78);
    const [usageTime, setUsageTime] = useState("20h 30m")

    // const loadBills = () => {
    //     axios
    //         .get(`#`)
    //         .then(res => {
    //             setFee(res.data.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    return (
        <div
            style={{
                width: "300px",
                padding: "20px 25px 10px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                // position: "relative",
                height: "100%",
                overflow: "auto",
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
                    Bill
                </span>
            </div>
            <div className="bill-content"
                 style={{
                     height: "90%",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between"
                 }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10px"
                    }}
                >
                    <span
                        className="fee"
                        style={{
                            fontSize: '3.5rem',
                            color: "white",
                            fontFamily: "ubuntu-regular",
                            lineHeight: "120%",
                        }}
                    >${fee}</span>
                    <span
                        className="fee"
                        style={{
                            fontSize: '0.9rem',
                            color: "#707e8f",
                            fontFamily: "ubuntu-regular",
                            paddingLeft: "3px",
                        }}
                    >usage time : {usageTime}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <BillChart />
                    <BillsTable />
                </div>
            </div>
        </div>
    );
};

export default Bill;