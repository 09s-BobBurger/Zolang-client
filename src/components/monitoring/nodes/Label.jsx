import React from "react";

function Label(props) {
    return (
        <div
            style={{
                display: "inline-block",
                color: "white",
                backgroundColor: "#474B59",
                padding: "6px 12px",
                fontSize: "14px",
                width: "max-content",
                height: "fit-content",
                borderRadius: "8px",
                textAlign: 'left'
            }}
        >
            {props.name}
        </div>
    );
}

export default Label;
