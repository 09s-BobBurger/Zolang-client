import React, { useState, useEffect } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from "@mui/material/styles";

const AppBar = styled(MuiAppBar)({
    zIndex: '20',
    '&.MuiPaper-root': {
        backgroundColor: '#222634',
        padding: '20px 32px',
    },
    '& svg:hover': {
        cursor: 'pointer'
    }
});

const Header = ({ open, setOpen }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true); 
        }, 2000);
    }, []);

    const onClickLogo = () => {
        setOpen(!open);
    }

    if (isLoggedIn) {
        return (
            <AppBar>
                <svg
                    onClick={onClickLogo}
                    width="61" viewBox="0 0 210 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M184.682 95.9342V89.2782H195.115C196.907 89.2782 198.25 88.8302 199.146 87.9342C200.042 87.0809 200.49 85.8436 200.49 84.2222V81.5982L200.618 75.0062H198.891L200.618 73.2782C200.618 76.1369 199.765 78.3769 198.059 79.9982C196.395 81.5769 194.133 82.3662 191.275 82.3662C187.691 82.3662 184.832 81.1502 182.699 78.7182C180.608 76.2862 179.562 73.0009 179.562 68.8622V62.0142C179.562 57.9182 180.608 54.6542 182.699 52.2222C184.832 49.7902 187.691 48.5742 191.275 48.5742C194.133 48.5742 196.395 49.3849 198.059 51.0062C199.765 52.5849 200.618 54.8036 200.618 57.6622L198.891 55.9342H200.618L200.426 49.2142H208.426V84.4142C208.426 87.9556 207.253 90.7502 204.906 92.7982C202.56 94.8889 199.338 95.9342 195.242 95.9342H184.682ZM193.962 75.4542C196.01 75.4542 197.589 74.8569 198.699 73.6622C199.851 72.4249 200.426 70.7182 200.426 68.5422V62.3982C200.426 60.2222 199.851 58.5369 198.699 57.3422C197.589 56.1049 196.01 55.4862 193.962 55.4862C191.914 55.4862 190.336 56.0836 189.227 57.2782C188.117 58.4729 187.562 60.1796 187.562 62.3982V68.5422C187.562 70.7609 188.117 72.4676 189.227 73.6622C190.336 74.8569 191.914 75.4542 193.962 75.4542Z" fill="white"/>
                    <path d="M144.707 84.4142V49.2142H152.515V55.9342H154.691L152.515 57.7902C152.515 54.8889 153.347 52.6276 155.011 51.0062C156.718 49.3849 159.043 48.5742 161.987 48.5742C165.443 48.5742 168.195 49.7262 170.243 52.0302C172.334 54.3342 173.379 57.4276 173.379 61.3102V84.4142H165.379V62.1422C165.379 60.0089 164.824 58.3662 163.715 57.2142C162.606 56.0622 161.048 55.4862 159.043 55.4862C157.08 55.4862 155.523 56.0836 154.371 57.2782C153.262 58.4729 152.707 60.1796 152.707 62.3982V84.4142H144.707Z" fill="white"/>
                    <path d="M119.901 85.0542C116.275 85.0542 113.416 84.0942 111.325 82.1742C109.235 80.2542 108.189 77.6729 108.189 74.4302C108.189 70.9742 109.341 68.3076 111.645 66.4302C113.949 64.5529 117.213 63.6142 121.437 63.6142H130.205V60.6062C130.205 58.8996 129.651 57.5769 128.541 56.6382C127.432 55.6569 125.917 55.1662 123.997 55.1662C122.248 55.1662 120.797 55.5502 119.645 56.3182C118.493 57.0862 117.811 58.1316 117.597 59.4542H109.789C110.173 56.1262 111.667 53.4809 114.269 51.5182C116.872 49.5556 120.2 48.5742 124.253 48.5742C128.563 48.5742 131.955 49.6622 134.429 51.8382C136.947 53.9716 138.205 56.8729 138.205 60.5422V84.4142H130.461V78.2702H129.181L130.461 76.5422C130.461 79.1449 129.501 81.2142 127.581 82.7502C125.661 84.2862 123.101 85.0542 119.901 85.0542ZM122.525 79.0382C124.787 79.0382 126.621 78.4622 128.029 77.3102C129.48 76.1582 130.205 74.6649 130.205 72.8302V68.5422H121.565C119.944 68.5422 118.643 69.0116 117.661 69.9502C116.68 70.8889 116.189 72.1262 116.189 73.6622C116.189 75.3262 116.744 76.6489 117.853 77.6302C119.005 78.5689 120.563 79.0382 122.525 79.0382Z" fill="white"/>
                    <path d="M94.0062 84.4143C91.7022 84.4143 89.6755 83.945 87.9262 83.0063C86.2195 82.0677 84.8755 80.745 83.8942 79.0383C82.9129 77.289 82.4222 75.2837 82.4222 73.0223V44.9263H71.1582V37.6943H90.4222V73.0223C90.4222 74.3023 90.7849 75.3263 91.5102 76.0943C92.2782 76.8197 93.3022 77.1823 94.5822 77.1823H105.206V84.4143H94.0062Z" fill="white"/>
                    <path d="M53.4544 84.9902C50.4677 84.9902 47.865 84.4355 45.6464 83.3262C43.4704 82.1742 41.7637 80.5742 40.5264 78.5262C39.3317 76.4355 38.7344 73.9822 38.7344 71.1662V62.4622C38.7344 59.6462 39.3317 57.2142 40.5264 55.1662C41.7637 53.0755 43.4704 51.4755 45.6464 50.3662C47.865 49.2142 50.4677 48.6382 53.4544 48.6382C56.4837 48.6382 59.0864 49.2142 61.2624 50.3662C63.4384 51.4755 65.1237 53.0755 66.3184 55.1662C67.5557 57.2142 68.1744 59.6249 68.1744 62.3982V71.1662C68.1744 73.9822 67.5557 76.4355 66.3184 78.5262C65.1237 80.5742 63.4384 82.1742 61.2624 83.3262C59.0864 84.4355 56.4837 84.9902 53.4544 84.9902ZM53.4544 78.0142C55.5877 78.0142 57.2304 77.4382 58.3824 76.2862C59.577 75.0915 60.1744 73.3849 60.1744 71.1662V62.4622C60.1744 60.2008 59.577 58.4942 58.3824 57.3422C57.2304 56.1902 55.5877 55.6142 53.4544 55.6142C51.3637 55.6142 49.721 56.1902 48.5264 57.3422C47.3317 58.4942 46.7344 60.2008 46.7344 62.4622V71.1662C46.7344 73.3849 47.3317 75.0915 48.5264 76.2862C49.721 77.4382 51.3637 78.0142 53.4544 78.0142Z" fill="#019CF6"/>
                    <path d="M16.36 85.1183C11.624 85.1183 7.86933 83.817 5.096 81.2143C2.36533 78.569 1 75.0277 1 70.5903H9C9 72.937 9.66133 74.7717 10.984 76.0943C12.3067 77.417 14.0987 78.0783 16.36 78.0783C18.6213 78.0783 20.4133 77.4383 21.736 76.1583C23.0587 74.8357 23.72 73.001 23.72 70.6543V45.1183H12.84V37.6943H31.72V70.6543C31.72 75.1343 30.3333 78.6757 27.56 81.2783C24.8293 83.8383 21.096 85.1183 16.36 85.1183Z" fill="#019CF6"/>
                    <path d="M75.5711 25.1198C74.2271 25.1198 73.0538 24.9065 72.0511 24.4798C71.0484 24.0532 70.2591 23.4665 69.6831 22.7198C69.1284 21.9518 68.8298 21.0558 68.7871 20.0318H72.7871C72.8298 20.5865 73.0964 21.0345 73.5871 21.3758C74.0991 21.7172 74.7604 21.8878 75.5711 21.8878H76.9791C77.9604 21.8878 78.6964 21.6958 79.1871 21.3118C79.6778 20.9278 79.9231 20.4052 79.9231 19.7438C79.9231 19.1252 79.6991 18.6452 79.2511 18.3038C78.8244 17.9412 78.1524 17.7065 77.2351 17.5998L75.0591 17.2798C73.0538 17.0025 71.5818 16.4692 70.6431 15.6798C69.7044 14.8905 69.2351 13.7065 69.2351 12.1278C69.2351 10.4852 69.7898 9.21585 70.8991 8.31985C72.0084 7.40251 73.6404 6.94385 75.7951 6.94385H77.0111C78.9738 6.94385 80.5418 7.38118 81.7151 8.25585C82.8884 9.13051 83.5178 10.3038 83.6031 11.7758H79.6031C79.5391 11.3065 79.2724 10.9225 78.8031 10.6238C78.3551 10.3252 77.7578 10.1758 77.0111 10.1758H75.7951C74.8778 10.1758 74.2058 10.3465 73.7791 10.6878C73.3738 11.0078 73.1711 11.4878 73.1711 12.1278C73.1711 12.7252 73.3524 13.1732 73.7151 13.4718C74.0778 13.7492 74.6644 13.9518 75.4751 14.0798L77.7471 14.3998C79.8378 14.6985 81.3738 15.2638 82.3551 16.0958C83.3578 16.9065 83.8591 18.1118 83.8591 19.7118C83.8591 21.4185 83.2724 22.7518 82.0991 23.7118C80.9471 24.6505 79.2404 25.1198 76.9791 25.1198H75.5711Z" fill="white"/>
                    <path d="M52.0957 9.952L54.6557 0H59.7757L55.6157 9.952H52.0957Z" fill="white"/>
                    <path d="M33.6433 24.8319L40.5553 13.9519L40.3633 13.8239C39.9367 14.4852 39.3607 14.9865 38.6353 15.3279C37.91 15.6692 37.0993 15.8399 36.2033 15.8399C34.966 15.8399 33.878 15.5412 32.9393 14.9439C32.022 14.3465 31.3073 13.5145 30.7953 12.4479C30.2833 11.3812 30.0273 10.1332 30.0273 8.70386C30.0273 7.16785 30.3473 5.84519 30.9873 4.73586C31.6487 3.60519 32.566 2.73052 33.7393 2.11185C34.9127 1.47186 36.278 1.15186 37.8353 1.15186C39.4353 1.15186 40.822 1.48252 41.9953 2.14385C43.1687 2.78385 44.0753 3.69052 44.7153 4.86386C45.3767 6.03719 45.7073 7.41319 45.7073 8.99185C45.7073 10.0799 45.526 11.2425 45.1633 12.4799C44.8007 13.6959 44.278 14.8372 43.5953 15.9039L38.0913 24.8319H33.6433ZM37.8673 12.7999C39.0407 12.7999 39.99 12.4265 40.7153 11.6799C41.4407 10.9119 41.8033 9.89852 41.8033 8.63985C41.8033 7.42385 41.4407 6.44252 40.7153 5.69585C39.99 4.92786 39.0407 4.54386 37.8673 4.54386C36.694 4.54386 35.7447 4.92786 35.0193 5.69585C34.294 6.44252 33.9313 7.42385 33.9313 8.63985C33.9313 9.89852 34.294 10.9119 35.0193 11.6799C35.7447 12.4265 36.694 12.7999 37.8673 12.7999Z" fill="white"/>
                    <path d="M18.6799 25.1519C17.1652 25.1519 15.8532 24.8639 14.7439 24.2879C13.6345 23.7119 12.7705 22.9012 12.1519 21.8559C11.5545 20.8105 11.2559 19.5839 11.2559 18.1759V8.12786C11.2559 6.71986 11.5545 5.49319 12.1519 4.44785C12.7705 3.40252 13.6345 2.59185 14.7439 2.01585C15.8532 1.43985 17.1652 1.15186 18.6799 1.15186C20.2159 1.15186 21.5279 1.43985 22.6159 2.01585C23.7252 2.59185 24.5785 3.40252 25.1759 4.44785C25.7945 5.49319 26.1039 6.71986 26.1039 8.12786V18.1759C26.1039 19.5839 25.7945 20.8105 25.1759 21.8559C24.5785 22.9012 23.7252 23.7119 22.6159 24.2879C21.5065 24.8639 20.1945 25.1519 18.6799 25.1519ZM18.6799 21.6959C19.7892 21.6959 20.6745 21.3759 21.3359 20.7359C21.9972 20.0959 22.3279 19.2425 22.3279 18.1759V8.12786C22.3279 7.06119 21.9972 6.20785 21.3359 5.56785C20.6745 4.92785 19.7892 4.60785 18.6799 4.60785C17.5705 4.60785 16.6852 4.92785 16.0239 5.56785C15.3625 6.20785 15.0319 7.06119 15.0319 8.12786V18.1759C15.0319 19.2425 15.3625 20.0959 16.0239 20.7359C16.6852 21.3759 17.5705 21.6959 18.6799 21.6959ZM18.6799 15.2319C18.0612 15.2319 17.5492 15.0292 17.1439 14.6239C16.7599 14.2185 16.5679 13.6959 16.5679 13.0559C16.5679 12.4159 16.7599 11.9039 17.1439 11.5199C17.5279 11.1359 18.0399 10.9439 18.6799 10.9439C19.3199 10.9439 19.8319 11.1359 20.2159 11.5199C20.5999 11.9039 20.7919 12.4159 20.7919 13.0559C20.7919 13.6959 20.5999 14.2185 20.2159 14.6239C19.8319 15.0292 19.3199 15.2319 18.6799 15.2319Z" fill="white"/>
                </svg>
            </AppBar>
        );
    }

    return null;
};

export default Header;
