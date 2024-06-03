import { createTheme } from "@mui/material/styles";

const theme = (props) =>
    createTheme({
        palette: {
            text: {
                primary: props,
                disabled: "#474B59",
            },
            primary : {
                main: "#606472"
            }
        },
        
    });

export default theme;
