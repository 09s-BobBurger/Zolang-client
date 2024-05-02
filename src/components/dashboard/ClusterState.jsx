import React from 'react';

const ClusterState = ({state}) => {
    if (state === 1) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_334_3321)">
                    <rect x="11" y="9" width="3" height="11" fill="#474B59"/>
                    <rect x="5" y="14" width="3" height="6" fill="#60AD20"/>
                    <rect x="17" y="4" width="3" height="16" fill="#474B59"/>
                </g>
                <defs>
                    <clipPath id="clip0_334_3321">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    }
    else if (state === 2) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_152_815)">
                    <rect x="11" y="9" width="3" height="11" fill="#60AD20"/>
                    <rect x="5" y="14" width="3" height="6" fill="#60AD20"/>
                    <rect x="17" y="4" width="3" height="16" fill="#474B59"/>
                </g>
                <defs>
                    <clipPath id="clip0_152_815">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        )
    }
    else if (state === 3) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_152_820)">
                    <rect x="11" y="9" width="3" height="11" fill="#60AD20"/>
                    <rect x="5" y="14" width="3" height="6" fill="#60AD20"/>
                    <rect x="17" y="4" width="3" height="16" fill="#60AD20"/>
                </g>
                <defs>
                    <clipPath id="clip0_152_820">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        )
    }
};

export default ClusterState;