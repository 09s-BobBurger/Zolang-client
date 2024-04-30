import React from 'react';
import DashboardResult from '../components/dashboard/dashboardResult';

const Dashboard = () => {
    return (
        <div style={{ position: "fixed", top: "68px",padding: "5px", background: "#474B59" }}>
            <DashboardResult />
        </div>
    );
};

export default Dashboard;