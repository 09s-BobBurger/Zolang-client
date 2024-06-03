import React from 'react';
import DashboardResult from '../components/dashboard/dashboardResult';

const Dashboard = () => {
    return (
        <div style={{ position: "fixed", top: "68px",width: "100vw", height: "calc(100vh - 68px)", background: "#474B59", overflow: "auto", padding: "30px", boxSizing: "border-box"  }}>
            <DashboardResult />
        </div>
    );
};

export default Dashboard;