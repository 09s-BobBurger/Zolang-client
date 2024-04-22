import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";

const Main = () => {
    return (
        <div style={{}}>
            <div
                style={{
                    background: "#151927",
                    height: "50vh",
                    width: "100vw",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "calc(50vw - 74.28px)",
                    }}
                >
                    <img src="./zolang_img.png" width={110} height={180} />
                    <p
                        style={{
                            margin: 0,
                            fontSize: "48px",
                            padding: "0px",
                            color: "#ffffff",
                        }}
                    >
                        ZoLang
                    </p>
                </div>
            </div>
            <div
                style={{
                    background: "#C2C2C2",
                    height: "50vh",
                    width: "100vw",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <div style={{
                        position: "absolute",
                        top: "10%",
                    }}>
                    <p style={{ margin: 0, fontSize: "36px", padding: "20px" }}>
                        Sign in to ZoLang
                    </p>
                    <p style={{ margin: 0, fontSize: "16px" }}>
                        Kubernetes를 처음 다루는 사람들이 접근하기 쉽고,
                        안전하게 배포를 수행하며, 학습할 수 있는 기회를
                        제공하여,
                        <br /> 더 빠르게 Kubernetes를 마스터할 수 있도록
                        도와줍니다.
                    </p>
                    <br />
                    <Button
                        style={{
                            width: "100px",
                            color: "#ffffff",
                            background: "#019CF6",
                            width: "50vw",
                            margin: "12px",
                        }}
                    >
                        Go To Yaml Generator
                    </Button>
                    <Button
                        style={{
                            width: "100px",
                            color: "#ffffff",
                            background: "#797D8B",
                            width: "50vw",
                        }}
                        startIcon={<GitHubIcon />}
                    >
                        PUSH
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Main;
