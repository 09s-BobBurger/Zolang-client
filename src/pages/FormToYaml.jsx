import React, { useState, useEffect } from "react";
import YamlResult from "../components/formtoyaml/yamlResult";
import FormToYamlFooter from "../components/formtoyaml/FormToYamlFooter";

function FormToYaml(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setTimeout(() => {
        setIsLoggedIn(true); // 로그인 상태로 변경
    }, 2000); // 2초 후에 로그인 상태로 변경
}, []);
    const topValue = isLoggedIn ? "67px" : "0";
    return (
        <>
            <div style={{ position: "fixed", top: topValue }}>
                <YamlResult />
            </div>
            <FormToYamlFooter/>
        </>
    );
}

export default FormToYaml;
