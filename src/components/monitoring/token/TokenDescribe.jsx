import React from "react";
import { CopyBlock,anOldHope	 } from "react-code-blocks";

function tokenDescribe(props) {
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
        <div
            style={{
                backgroundColor: "#2E3240",
                padding: "10px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                margin: "15px",
                marginBottom: "20px"
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
                토큰 상세 정보 확인
            </span>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                }}
            />
            <span
                style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    padding: "5px",
                    margin: "5px",
                }}
            >
                kubectl -n examplens describe secret mysecretname

            </span>
            <br/>
            <div style={{ width: "60vw", overflowY: "auto", padding: "5px", margin: "5px" }}>
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
