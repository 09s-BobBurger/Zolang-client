import React, {useEffect} from 'react';
import GuideToken from "./GuideToken"
import TokenDescribe from "./TokenDescribe"
import GuideDomainUrl from "./GuideDomainUrl.jsx";
import {useDispatch} from "react-redux";
import {initClusterNameInToken, setClusterNameInToken} from "../../../redux/modules/token.js";
import {styled} from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";

const TextField = styled(MuiTextField) ({
    width: '50vw',
    // margin: '8px',
    '& .MuiFormLabel-root, & .MuiFormLabel-shrink': {
        color: 'white !important',
    },
    '& .MuiInput-underline:before, .MuiInput-underline:after, .MuiInput-underline:hover::before': {
        borderColor: 'white !important',
    },
    '& .MuiInputBase-input' : {
        color: 'white'
    },
    '& input:-internal-autofill-selected': {
        appearance: 'none !important'
    },
    '& .Mui-error': {
        color: 'red !important'
    },
    '& .Mui-error.MuiInput-underline:before, & .Mui-error.MuiInput-underline:after, & .Mui-error.MuiInput-underline:hover::before': {
        borderColor: 'red !important',
    },
    '& .MuiFormHelperText-root': {
        position: 'absolute',
        bottom: '-18px'
    }

})

function TokenResult(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initClusterNameInToken());
    }, [])

    return (
        <div style={{width: "80vw", marginLeft: "25px", marginTop: "25px"}}>
            <span style={{
                    fontSize: "34px",
                    color: "#ffffff",
                    padding: "10px",
                    margin: "10px",
                }}>Guide Token</span>
            <div
                style={{
                    backgroundColor: "#2E3240",
                    padding: "10px",
                    outline: "1px solid #ABAFBD",
                    borderRadius: "10px",
                    margin: "15px",
                }}
            >
                <span
                    style={{
                        display: "block",
                        fontSize: "20px",
                        color: "#ffffff",
                        padding: "5px",
                        margin: "5px",
                    }}
                >
                        추가할 클러스터 이름을 입력해주세요.
                </span>
                <span
                    style={{
                        display: "block",
                        color: "#6b7083",
                        padding: "0 5px",
                        margin: "0 5px",
                    }}
                >
                        입력한 클러스터 이름은 가이드와 버전 확인, 클러스터 추가에 사용됩니다.
                </span>
                <hr
                    style={{
                        width: "98%",
                        border: 0,
                        height: "1px",
                        backgroundColor: "#474B59",
                    }}
                />
                <div className="cluster-name-form"
                     style={{
                         height: 'fit-content',
                         margin: '5px',
                         padding: '5px 5px 0',
                         marginBottom: '15px'

                     }}
                >
                    <TextField
                        id="standard-basic"
                        label="Cluster Name"
                        variant="standard"
                        onChange={(e) => {dispatch(setClusterNameInToken(e.target.value))}}
                    />
                </div>
            </div>
            <GuideToken />
            <TokenDescribe />
            <GuideDomainUrl />
        </div>
    );
}

export default TokenResult;