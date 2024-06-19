import React from 'react';

const ErrorMessage = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "60vh",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div
                style={{
                    width: "300px",
                    height: "200px",
                    background: "#ffffff",
                    borderRadius: "20px",
                    color: "#696969",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem"
                }}
            >
                <img
                    width="120px"
                    src="../../../failed.svg"
                    alt="load failed"
                />
                Error. Try Again.
            </div>
        </div>
    );
};

export default ErrorMessage;