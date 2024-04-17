import MuiRadio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

/*
Custom Radio
*/
const Radio = styled(MuiRadio) (({theme}) => ({
    color: 'white', // 클릭되기 전의 색을 하얀색으로 설정합니다.
    '&:hover': {
        backgroundColor: 'transparent', // 호버 시 배경색을 투명하게 설정합니다.
    },
    '&.Mui-checked': {
        color: theme.palette.primary.main, // 클릭되면 테마의 기본 색상으로 변경합니다.
    },
}))

export default Radio;