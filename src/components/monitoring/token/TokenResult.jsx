import React from 'react';
import GuideToken from "./GuideToken"
import TokenDescribe from "./TokenDescribe"

function TokenResult(props) {
    return (
        <div style={{width: "80vw", marginLeft: "25px"}}>
            <span style={{
                    fontSize: "34px",
                    color: "#ffffff",
                    padding: "10px",
                    margin: "10px",
                }}>Guide Token</span>
            <GuideToken />
            <TokenDescribe />
        </div>
    );
}

export default TokenResult;