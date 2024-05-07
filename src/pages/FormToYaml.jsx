import React, { useState, useEffect } from "react";
import YamlResult from "../components/formtoyaml/yamlResult";
import FormToYamlFooter from "../components/formtoyaml/FormToYamlFooter";
import loginUtil from '../util/login.js'
import PushModal from "../components/formtoyaml/PushModal.jsx";
import LoginModal from "../components/formtoyaml/LoginModal.jsx";

function FormToYaml() {
    const topValue = loginUtil.checkLogin() ? "67px" : "0";
    const [isPushModalOpen, setIsPushModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>
            <PushModal isOpen={isPushModalOpen} setIsOpen={setIsPushModalOpen} />
            <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
            <div style={{ position: "fixed", top: topValue }}>
                <YamlResult />
            </div>
            <FormToYamlFooter
                setIsPushModalOpen={setIsPushModalOpen}
                setIsLoginModalOpen={setIsLoginModalOpen}
            />
        </>
    );
}

export default FormToYaml;
