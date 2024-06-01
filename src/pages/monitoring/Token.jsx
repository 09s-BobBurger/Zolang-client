import React, {useState} from 'react';
import TokenResult from '../../components/monitoring/token/TokenResult';
import TokenFooter from '../../components/monitoring/token/TokenFooter';
import AlertModal from "../../components/formtoyaml/AlertModal.jsx";

const Token = () => {
    // const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);
    const [isVersionModalOpen, setIsVersionModalOpen] = useState(false);

    return (
        <>
            {/*<AlertModal*/}
            {/*    isOpen={isSuccessModalOpen}*/}
            {/*    setIsOpen={setIsSuccessModalOpen}*/}
            {/*    message="Add Cluster Successfully!"*/}
            {/*    icon="../success-svgrepo-com.svg"*/}
            {/*/>*/}
            <AlertModal
                isOpen={isFailModalOpen}
                setIsOpen={setIsFailModalOpen}
                message="Failed. Try Again."
                icon="../alarm-svgrepo-com.svg"
            />
            <AlertModal
                isOpen={isVersionModalOpen}
                setIsOpen={setIsVersionModalOpen}
                message="Failed. Please check your form."
                icon="../alarm-svgrepo-com.svg"
            />
        <div style={{ position: "fixed", top: "68px",width: "100vw", height: "calc(100vh - 127px)", background: "#474B59", overflow: "auto" }}>
            <TokenResult />
        </div>
        <TokenFooter
            // setIsSuccessModalOpen={setIsSuccessModalOpen}
            setIsFailModalOpen={setIsFailModalOpen}
            setIsVersionModalOpen={setIsVersionModalOpen}
        />
        </>
    );
};

export default Token;