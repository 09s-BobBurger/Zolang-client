import React from 'react';
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

const Header = ({ toggleDrawer }) => {
    return (
        <AppBar>
            {/* <svg
                onClick={toggleDrawer(true)}
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
            </svg> */}
            <svg onClick={toggleDrawer(true)} width="61" viewBox="0 0 215 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.056 87V79.576L23.808 47.512H5.504V40.28H32.64V47.704L13.824 79.768H33.344V87H5.056ZM54.375 87.576C49.8523 87.576 46.2683 86.3173 43.623 83.8C40.9777 81.24 39.655 77.8053 39.655 73.496V65.304C39.655 60.952 40.9777 57.5173 43.623 55C46.2683 52.4827 49.8523 51.224 54.375 51.224C58.8977 51.224 62.4817 52.4827 65.127 55C67.7723 57.5173 69.095 60.952 69.095 65.304V73.496C69.095 77.8053 67.7723 81.24 65.127 83.8C62.4817 86.3173 58.8977 87.576 54.375 87.576ZM54.375 80.6C56.5083 80.6 58.151 80.024 59.303 78.872C60.4977 77.6773 61.095 75.9707 61.095 73.752V65.048C61.095 62.8293 60.4977 61.144 59.303 59.992C58.151 58.7973 56.5083 58.2 54.375 58.2C52.2417 58.2 50.5777 58.7973 49.383 59.992C48.231 61.144 47.655 62.8293 47.655 65.048V73.752C47.655 75.9707 48.231 77.6773 49.383 78.872C50.5777 80.024 52.2417 80.6 54.375 80.6Z" fill="#00FFFF"/>
<path d="M95.246 87C91.7473 87 88.9313 85.9547 86.798 83.864C84.7073 81.7733 83.662 79.0213 83.662 75.608V47.512H72.078V40.28H91.662V75.416C91.662 76.7387 92.0247 77.8053 92.75 78.616C93.518 79.384 94.542 79.768 95.822 79.768H106.126V87H95.246ZM120.821 87.64C117.237 87.64 114.4 86.6373 112.309 84.632C110.261 82.584 109.237 79.9173 109.237 76.632C109.237 73.2187 110.41 70.5093 112.757 68.504C115.104 66.456 118.325 65.432 122.421 65.432H130.997V62.936C130.997 59.3947 128.928 57.624 124.789 57.624C122.912 57.624 121.418 57.9867 120.309 58.712C119.2 59.4373 118.581 60.4613 118.453 61.784H110.773C110.944 58.6267 112.266 56.0667 114.741 54.104C117.258 52.1413 120.629 51.16 124.853 51.16C129.333 51.16 132.81 52.2053 135.285 54.296C137.76 56.3867 138.997 59.3307 138.997 63.128V87H131.189V80.408C130.89 82.6693 129.824 84.44 127.989 85.72C126.154 87 123.765 87.64 120.821 87.64ZM123.381 81.112C125.728 81.112 127.584 80.536 128.949 79.384C130.314 78.232 130.997 76.696 130.997 74.776V70.616H122.805C121.056 70.616 119.669 71.1067 118.645 72.088C117.621 73.0693 117.109 74.328 117.109 75.864C117.109 77.4427 117.642 78.7227 118.709 79.704C119.818 80.6427 121.376 81.112 123.381 81.112ZM145.628 87V51.8H153.436V58.392C153.863 56.1733 154.908 54.424 156.572 53.144C158.236 51.8213 160.348 51.16 162.908 51.16C166.364 51.16 169.116 52.312 171.164 54.616C173.255 56.92 174.3 60.0133 174.3 63.896V87H166.3V64.856C166.3 62.68 165.724 61.016 164.572 59.864C163.463 58.6693 161.948 58.072 160.028 58.072C158.023 58.072 156.444 58.6693 155.292 59.864C154.183 61.0587 153.628 62.7653 153.628 64.984V87H145.628ZM185.603 98.52V91.864H195.523C197.4 91.864 198.851 91.352 199.875 90.328C200.899 89.3467 201.411 88.0027 201.411 86.296V84.184L201.539 78.68C200.814 80.6427 199.64 82.1787 198.019 83.288C196.44 84.3547 194.499 84.888 192.195 84.888C188.611 84.888 185.752 83.6933 183.619 81.304C181.528 78.872 180.483 75.5867 180.483 71.448V64.6C180.483 60.504 181.528 57.24 183.619 54.808C185.752 52.376 188.611 51.16 192.195 51.16C194.499 51.16 196.44 51.7147 198.019 52.824C199.64 53.8907 200.814 55.4267 201.539 57.432V51.8H209.347V86.488C209.347 90.2 208.11 93.1227 205.635 95.256C203.203 97.432 199.875 98.52 195.651 98.52H185.603ZM194.883 78.04C196.931 78.04 198.51 77.4427 199.619 76.248C200.771 75.0107 201.347 73.304 201.347 71.128V64.984C201.347 62.808 200.771 61.1227 199.619 59.928C198.51 58.6907 196.931 58.072 194.883 58.072C192.835 58.072 191.256 58.6693 190.147 59.864C189.038 61.016 188.483 62.6373 188.483 64.728V71.384C188.483 73.4747 189.038 75.1173 190.147 76.312C191.256 77.464 192.835 78.04 194.883 78.04Z" fill="white"/>
<path d="M21.6 33.32C20.0853 33.32 18.7733 33.032 17.664 32.456C16.5547 31.88 15.6907 31.0693 15.072 30.024C14.4747 28.9787 14.176 27.752 14.176 26.344V16.296C14.176 14.888 14.4747 13.6613 15.072 12.616C15.6907 11.5707 16.5547 10.76 17.664 10.184C18.7733 9.608 20.0853 9.32 21.6 9.32C23.1147 9.32 24.4267 9.608 25.536 10.184C26.6453 10.76 27.4987 11.5707 28.096 12.616C28.7147 13.6613 29.024 14.888 29.024 16.296V26.344C29.024 27.752 28.7147 28.9787 28.096 30.024C27.4987 31.0693 26.6453 31.88 25.536 32.456C24.4267 33.032 23.1147 33.32 21.6 33.32ZM21.6 29.864C22.7093 29.864 23.5947 29.544 24.256 28.904C24.9173 28.264 25.248 27.4107 25.248 26.344V16.296C25.248 15.2293 24.9173 14.376 24.256 13.736C23.616 13.096 22.7307 12.776 21.6 12.776C20.4693 12.776 19.5733 13.096 18.912 13.736C18.272 14.376 17.952 15.2293 17.952 16.296V26.344C17.952 27.4107 18.2827 28.264 18.944 28.904C19.6053 29.544 20.4907 29.864 21.6 29.864ZM21.6 23.24C20.96 23.24 20.448 23.0693 20.064 22.728C19.68 22.3653 19.488 21.864 19.488 21.224C19.488 20.584 19.68 20.104 20.064 19.784C20.448 19.4427 20.96 19.272 21.6 19.272C22.24 19.272 22.752 19.4427 23.136 19.784C23.52 20.104 23.712 20.584 23.712 21.224C23.712 21.864 23.52 22.3653 23.136 22.728C22.752 23.0693 22.24 23.24 21.6 23.24ZM36.7875 33L42.2595 23.56C42.0035 23.752 41.7048 23.9227 41.3635 24.072C41.0222 24.2 40.5102 24.264 39.8275 24.264C38.5475 24.264 37.3742 23.9547 36.3075 23.336C35.2622 22.7173 34.4302 21.864 33.8115 20.776C33.1928 19.6667 32.8835 18.3867 32.8835 16.936C32.8835 15.4 33.2035 14.0667 33.8435 12.936C34.5048 11.784 35.4222 10.8987 36.5955 10.28C37.7902 9.64 39.1875 9.32 40.7875 9.32C42.3875 9.32 43.7742 9.64 44.9475 10.28C46.1422 10.92 47.0595 11.8267 47.6995 13C48.3608 14.152 48.6915 15.5067 48.6915 17.064C48.6915 17.9813 48.4888 19.0373 48.0835 20.232C47.6995 21.4053 47.1662 22.6 46.4835 23.816L41.4275 33H36.7875ZM40.7875 21.064C41.9822 21.064 42.9422 20.6907 43.6675 19.944C44.3928 19.176 44.7555 18.152 44.7555 16.872C44.7555 15.6133 44.3928 14.6107 43.6675 13.864C42.9422 13.096 41.9822 12.712 40.7875 12.712C39.5928 12.712 38.6328 13.096 37.9075 13.864C37.1822 14.6107 36.8195 15.6133 36.8195 16.872C36.8195 18.152 37.1822 19.176 37.9075 19.944C38.6328 20.6907 39.5928 21.064 40.7875 21.064ZM56.999 19.4L58.727 15.432C58.8977 15.048 59.0363 14.632 59.143 14.184C59.271 13.736 59.335 13.352 59.335 13.032C59.335 12.392 59.175 11.7627 58.855 11.144C58.5563 10.5253 58.119 10.024 57.543 9.64H61.703C62.215 10.024 62.6097 10.536 62.887 11.176C63.1857 11.7947 63.335 12.4133 63.335 13.032C63.335 13.4587 63.2497 13.9707 63.079 14.568C62.9297 15.1653 62.7483 15.7093 62.535 16.2L61.127 19.4H56.999ZM78.4265 33.288C76.3358 33.288 74.6825 32.8187 73.4665 31.88C72.2505 30.92 71.6425 29.6293 71.6425 28.008H75.5785C75.5785 28.6907 75.8238 29.2133 76.3145 29.576C76.8265 29.9387 77.5305 30.12 78.4265 30.12H79.8345C80.7945 30.12 81.5305 29.9387 82.0425 29.576C82.5758 29.2133 82.8425 28.6907 82.8425 28.008C82.8425 27.368 82.6612 26.8987 82.2985 26.6C81.9358 26.28 81.3812 26.0667 80.6345 25.96L76.2505 25.384C74.8425 25.192 73.7545 24.648 72.9865 23.752C72.2398 22.856 71.8665 21.6933 71.8665 20.264C71.8665 18.6 72.4212 17.3307 73.5305 16.456C74.6398 15.56 76.2398 15.112 78.3305 15.112H79.8025C81.7652 15.112 83.3438 15.56 84.5385 16.456C85.7332 17.352 86.3518 18.5467 86.3945 20.04H82.4265C82.4052 19.4853 82.1598 19.048 81.6905 18.728C81.2212 18.3867 80.5918 18.216 79.8025 18.216H78.3305C77.4772 18.216 76.8265 18.3973 76.3785 18.76C75.9305 19.1013 75.7065 19.5707 75.7065 20.168C75.7065 20.7013 75.8665 21.096 76.1865 21.352C76.5278 21.608 77.0185 21.768 77.6585 21.832L81.7865 22.408C83.4078 22.6 84.6238 23.176 85.4345 24.136C86.2665 25.0747 86.6825 26.344 86.6825 27.944C86.6825 29.6507 86.0958 30.9733 84.9225 31.912C83.7705 32.8293 82.0745 33.288 79.8345 33.288H78.4265Z" fill="white"/>
</svg>
        </AppBar>
    );
};

export default Header;
