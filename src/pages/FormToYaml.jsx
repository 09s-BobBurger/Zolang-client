import React from "react";
import YamlResult from "../components/formtoyaml/yamlResult";

function FormToYaml(props) {
    return (
        <div style={{ position: "fixed", top: "0" }}>
            <YamlResult />
        </div>
    );
}

export default FormToYaml;
