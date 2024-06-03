import React from "react";
import SettingComponents from "../../components/cd/SettingComponents";

function BuildSetting(props) {
    return (
        <div className="repo-list-page">
            <div className="repo-list-header">
                <h3 className="repo-list-title">Build Setting</h3>
            </div>
            <div className="build-setting">
                <SettingComponents />
            </div>
        </div>
    );
}

export default BuildSetting;
