import React, { useState, useEffect } from "react";
import YamlResult from "../components/formtoyaml/yamlResult";
import FormToYamlFooter from "../components/formtoyaml/FormToYamlFooter";
import loginUtil from '../util/login.js'

function FormToYaml() {
    const topValue = loginUtil.checkLogin() ? "67px" : "0";
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
