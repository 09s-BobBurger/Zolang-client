import React from "react";
import { CopyBlock,anOldHope} from "react-code-blocks";

function token() {
    const secret = `apiVersion: v1
kind: Secret
type: kubernetes.io/service-account-token
metadata:
  name: mysecretname
  annotations:
    kubernetes.io/service-account.name: myserviceaccount`;
    return (
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
                    fontSize: "24px",
                    color: "#ffffff",
                    padding: "5px",
                    margin: "5px",
                }}
            >
                가이드 토큰 발급 방법
            </span>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                }}
            />
            <div style={{ width: "60vw", padding: "5px", margin: "5px" }}>
                <CopyBlock
                    language="yaml"
                    text={secret}
                    theme={anOldHope}
                    wrapLines={true}
                    showLineNumbers={false}
                    codeBlock
                />
            </div>
            <br/>
            <span
                style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    padding: "5px",
                    margin: "5px",
                }}
            >
                kubectl -n examplens create -f
                https://k8s.io/examples/secret/serviceaccount/mysecretname.yaml
            </span>
        </div>
    );
}

export default token;
