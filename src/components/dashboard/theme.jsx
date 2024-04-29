import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = (props) => createTheme({
    palette: {
        text: {
            primary: props,
            disabled: "#474B59",
        },
    },
});

export default theme;
