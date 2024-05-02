import React from 'react';
import TokenResult from '../../components/monitoring/token/TokenResult';
import TokenFooter from '../../components/monitoring/token/TokenFooter';

const Token = () => {
    return (
        <>
        <div style={{ position: "fixed", top: "68px",width: "100vw", height: "calc(100vh - 127px)", background: "#474B59", overflow: "auto" }}>
            <TokenResult />
        </div>
        <TokenFooter />
        </>
    );
};

export default Token;