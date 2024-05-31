import React, {useState} from 'react';
import BillChart from "./BillChart.jsx";

const Bill = () => {

    const [fee, setFee] = useState(59.9);

    return (
        <div
            style={{
                padding: "20px 25px 10px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                position: "relative",
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
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between"
                 }}
            >
                <span className="fee">$ {fee}</span>
                <BillChart />
            </div>
        </div>
    );
};

export default Bill;