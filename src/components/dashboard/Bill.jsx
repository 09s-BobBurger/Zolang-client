import React, {useEffect, useState} from 'react';
import BillChart from "./BillChart.jsx";
import "../../styles/DASHBOARD.css";
import BillsTable from "./BillsTable.jsx";
import {customizedAxios as axios} from "../../util/customizedAxios.js";

const Bill = () => {
    const [data, setData] = useState(null);

    const loadBills = () => {
        axios
            .get(`/api/v1/user/dashboard/usage/bill`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const toTime = (value) => {
        return `${parseInt(value / 60)}h ${value % 60}m`
    }

    useEffect(() => {
        loadBills();
    }, [])

    return (
        <div
            style={{
                // minWidth: "280px",
                padding: "20px 25px 10px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                height: "-webkit-fill-available",
                minHeight : "635px",
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
                            fontSize: '3rem',
                            color: "white",
                            fontFamily: "ubuntu-regular",
                            lineHeight: "120%",
                        }}
                    >{data ? `₩${data[0].totalCost.toLocaleString().split(".")[0]}` : '-'}</span>
                    <span
                        className="fee"
                        style={{
                            fontSize: '0.9rem',
                            color: "#707e8f",
                            fontFamily: "ubuntu-regular",
                            paddingLeft: "3px",
                        }}
                    >
                        {data ?
                            `runtime: ${toTime(data[0].totalClusterRuntime)}`
                            :
                            "There's no usage..."
                        }
                    </span>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <BillChart data={data}/>
                    <BillsTable current={data ? data[0] : null}/>
                </div>
            </div>
        </div>
    );
};

export default Bill;