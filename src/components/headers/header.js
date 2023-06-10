import {AppBar, Box} from "@mui/material";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {

    return (
        <AppBar
            sx={{backgroundColor: "background.alternative"}}
            variant="elevation"
            square={true}
            elevation={0}>
            <Box sx={{display: {xs: "none", lg: "block"}}}><DesktopHeader/></Box>
            <Box sx={{display: {xs: "block", md: "none", lg: "none"}}}><MobileHeader/></Box>
        </AppBar>
    )
}

export default Header;