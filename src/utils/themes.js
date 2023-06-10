import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {main: "#131313"},
        secondary: {main: "#33a16e"},
        background: {
            default: "#000000",
            paper: "#111111",
            alternative: "#131313",
            transparent: "rgba(0,0,0,0.35)"
        },
        text: {
            primary: "#ffffff",
            secondary: "#898989",
        },
        light: {
            secondary: 'rgba(175,121,93,0.3)',
        },
        icon: {
            border: 'rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            secondary: 'rgba(255, 255, 255, 0.85)'
        },
        mode: "dark",
        divider: "rgba(255, 255, 255, 0.3)"
    },
    typography: {
        fontFamily: 'Urbanist, Outfit, GoogleSans, Lexend, Manrope, Urbanist'
    },
    shape: {
        borderRadius: 32
    }
});

export {theme};