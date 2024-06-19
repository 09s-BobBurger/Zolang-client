import React from "react";
import { CopyBlock,anOldHope	 } from "react-code-blocks";

function tokenDescribe() {
    const describe = `Name:           mysecretname
Namespace:      examplens
Labels:         <none>
Annotations:    kubernetes.io/service-account.name=myserviceaccount
                          kubernetes.io/service-account.uid=8a85c4c4-8483-11e9-bc42-526af7764f64
    
Type:   kubernetes.io/service-account-token
    
Data
====
ca.crt:         1362 bytes
namespace:      9 bytes
token:          ...`;
    return (
        <div className="token-box">
            <span
                className="token-content-title"
            >
                토큰 상세 정보 확인
            </span>
            <span className="token-content-desc">
                kubectl을 사용하여 secret token의 상세 정보를 확인합니다.
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
                    language="zsh"
                    text="kubectl -n examplens describe secret mysecretname"
                    theme={anOldHope}
                    wrapLines={true}
                    showLineNumbers={false}
                    codeBlock
                />
            </div>
            <div style={{ width: "calc(100% - 10px)", overflowY: "auto", padding: "5px", margin: "5px", boxSizing: 'border-box' }}>
                <CopyBlock
                    language="yaml"
                    text={describe}
                    theme={anOldHope}
                    wrapLines={true}
                    showLineNumbers={false}
                    codeBlock
                />
            </div>
        </div>
    );
}

export default tokenDescribe;
