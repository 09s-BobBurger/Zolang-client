import React, {useEffect, useState} from 'react';
import GuideToken from "./GuideToken"
import TokenDescribe from "./TokenDescribe"
import GuideDomainUrl from "./GuideDomainUrl.jsx";
import {useDispatch, useSelector} from "react-redux";
import {initClusterNameInToken, setClusterNameInToken} from "../../../redux/modules/token.js";
import {styled} from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";

const TextField = styled(MuiTextField) ({
    width: '400px',
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

const steps = [
    {
        id: 1,
        title: "클러스터 이름 입력"
    },
    {
        id: 2,
        title: "가이드 토큰 발급"
    },
    {
        id: 3,
        title: "토큰 상세 정보 확인"
    },
    {
        id: 4,
        title: "Token & Domain URL 확인"
    }
]

function TokenResult(props) {
    const clusterNameState = useSelector(state => state.token.clusterName);
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        dispatch(initClusterNameInToken());
    }, [])

    const handleNext = () => {
        if (current < 4) {
            setCurrent(current + 1);
        }
    }

    const handlePrev = () => {
        if (current > 1) {
            setCurrent(current - 1);
        }
    }

    return (
        <div style={{width: "calc(100vw - 50px)", marginLeft: "25px", marginTop: "25px"}}>
            <span style={{
                    fontSize: "34px",
                    color: "#ffffff",
                    padding: "10px",
                    margin: "10px",
                }}>Guide Token</span>
            <div className="token-container">
                <div
                    className="token-steps"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {
                        steps.map(step => {
                            return (
                                <button
                                    className={step.id === current ? "token-step current-step" : "token-step"}
                                    onClick={() => {setCurrent(step.id)}}
                                >
                                    <span className="token-step-id">{step.id}</span>
                                    <span className="token-step-title">{step.title}</span>
                                </button>
                            )
                        })
                    }
                    <div
                        style={{
                            marginTop: "30px",
                            width: "310px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px"
                        }}
                    >
                        <button
                            onClick={handlePrev}
                            className={"step-move-button prev"}
                            disabled={current < 2}
                        >
                            PREV
                        </button>
                        <button
                            onClick={handleNext}
                            className={"step-move-button next"}
                            disabled={current > 3}
                        >
                            NEXT
                        </button>
                    </div>

                </div>
                <div className="token-content">
                    {
                        current === 1 &&
                        <div className="token-box">
                            <span className="token-content-title">
                                클러스터 이름 입력
                            </span>
                            <span className="token-content-desc">
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
                                    value={clusterNameState}
                                />
                            </div>
                        </div>
                    }
                    {
                        current === 2 &&
                        <GuideToken />
                    }
                    {
                        current === 3 &&
                        <TokenDescribe />
                    }
                    {
                        current === 4 &&
                        <GuideDomainUrl />
                    }
                </div>
            </div>
        </div>
    );
}

export default TokenResult;