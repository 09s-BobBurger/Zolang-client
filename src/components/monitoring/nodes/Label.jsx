import React from "react";

function Label(props) {
    return (
        <div
            style={{
                color: "white",
                backgroundColor: "#474B59",
                padding: "6px 12px",
                fontSize: "14px",
                width: "fit-content",
                height: "20px",
                borderRadius: "5px"
            }}
        >
            {props.name}
        </div>
    );
}

export default Label;
