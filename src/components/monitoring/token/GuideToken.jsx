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
        <div className="token-box">
            <span className="token-content-title">
                가이드 토큰 발급 방법
            </span>
            <span className="token-content-desc">
                Secret YAML 파일을 작성한 뒤, kubectl을 사용하여 적용합니다.
            </span>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                }}
            />
            <div style={{ width: "calc(100% - 10px)", padding: "5px", margin: "5px", boxSizing: 'border-box' }}>
                <CopyBlock
                    language="yaml"
                    text={secret}
                    theme={anOldHope}
                    wrapLines={true}
                    showLineNumbers={false}
                    codeBlock
                />
            </div>

            <div style={{ width: "calc(100% - 10px)", padding: "5px", margin: "5px", boxSizing: 'border-box' }}>
                <CopyBlock
                    language="zsh"
                    text="kubectl -n examplens create -f
                    https://k8s.io/examples/secret/serviceaccount/mysecretname.yaml"
                    theme={anOldHope}
                    wrapLines={true}
                    showLineNumbers={false}
                    codeBlock
                />
            </div>
        </div>
    );
}

export default token;
