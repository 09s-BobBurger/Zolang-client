import React, {useEffect} from 'react';
import GuideToken from "./GuideToken"
import TokenDescribe from "./TokenDescribe"
import GuideDomainUrl from "./GuideDomainUrl.jsx";
import {useDispatch} from "react-redux";
import {initClusterNameInToken} from "../../../redux/modules/token.js";

function TokenResult(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initClusterNameInToken());
    }, [])

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
            <GuideDomainUrl />
        </div>
    );
}

export default TokenResult;