import {Cookies} from "react-cookie";

// 로그인 여부를 true, false로 반환
const checkLogin = () => {
    const cookies = new Cookies().cookies;
    // 토큰 유효성 검사 -> 후에 수정
    return cookies.access_token !== undefined && cookies.refresh_token !== undefined;
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

export default {checkLogin, logout};