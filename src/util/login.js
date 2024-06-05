import {Cookies} from "react-cookie";

// 로그인 여부를 true, false로 반환
const checkLogin = () => {
    const cookies = new Cookies().cookies;
    // 토큰 유효성 검사 -> 후에 수정
    return cookies.access_token !== undefined && cookies.refresh_token !== undefined;
}

// access_token 추출
const getAccessToken = () => {
    const cookies = new Cookies().cookies;
    return cookies.access_token ? cookies.access_token : null;
}

// refresh_token 추출
const getRefreshToken = () => {
    const cookies = new Cookies().cookies;
    return cookies.refresh_token ? cookies.refresh_token : null;
}

// logout 시 cookies에서 token 삭제
const logout = () => {
    const cookies = new Cookies();
    cookies.remove('access_token', { path: '/', domain: ".zolang.store" });
    cookies.remove('refresh_token', { path: '/', domain: ".zolang.store" });
    const path = window.location.pathname;

    if (path !== "/FormToYaml" || path !== "/formToYaml" || path !== "/") {
        window.location.href = window.location.origin;
    }
}

export default {checkLogin, getAccessToken, getRefreshToken, logout};