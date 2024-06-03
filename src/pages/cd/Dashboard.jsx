import React from 'react';
import BuildResult from "../../components/cd/BuildResult.jsx";
import {useLocation} from "react-router-dom";

const Dashboard = () => {
    const repositoryId = useLocation().state ? useLocation().state.id : null;
    return (
        <>
            <BuildResult repositoryId={repositoryId}/>
        </>
    );
};

export default Dashboard;