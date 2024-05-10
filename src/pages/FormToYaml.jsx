import React, { useState, useEffect } from "react";
import YamlResult from "../components/formtoyaml/yamlResult";
import FormToYamlFooter from "../components/formtoyaml/FormToYamlFooter";
import loginUtil from '../util/login.js'
import PushModal from "../components/formtoyaml/PushModal.jsx";
import LoginModal from "../components/formtoyaml/LoginModal.jsx";
import AlertModal from "../components/formtoyaml/AlertModal.jsx";

function FormToYaml() {
    const topValue = loginUtil.checkLogin() ? "67px" : "0";
    const [isPushSuccessModalOpen, setIsPushSuccessModalOpen] = useState(false);
    const [isPushFailModalOpen, setIsPushFailModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>
            <AlertModal
                isOpen={isPushSuccessModalOpen}
                setIsOpen={setIsPushSuccessModalOpen}
                message="Push Successfully!"
                icon="./success-svgrepo-com.svg"
            />
            <AlertModal
                isOpen={isPushFailModalOpen}
                setIsOpen={setIsPushFailModalOpen}
                message="Push Failed. Try Again."
                icon="./alarm-svgrepo-com.svg"
            />
            <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
            <div style={{ position: "fixed", top: topValue }}>
                <YamlResult />
            </div>
            <FormToYamlFooter
                setIsLoginModalOpen={setIsLoginModalOpen}
                setIsPushSuccessModalOpen={setIsPushSuccessModalOpen}
                setIsPushFailModalOpen={setIsPushFailModalOpen}
            />
        </>
    );
}

export default FormToYaml;
