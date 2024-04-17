import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const TextField = styled(MuiTextField) ({
    '& .MuiInputBase-input': {
        color: 'white', // 텍스트 필드의 입력 텍스트 색상을 변경합니다.
    },
    '& .MuiInputLabel-root': {
        color: 'white', // 라벨 텍스트 색상을 변경합니다.
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white', // 밑줄 색상을 변경합니다.
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white', // 포커스 시 밑줄 색상을 변경합니다.
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'white', // 호버 시 밑줄 색상을 변경합니다.
    },
    '& .standard-basic-label:after': {
        color: 'white'
    }
});

export default TextField;