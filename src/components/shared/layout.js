import {Box, SwipeableDrawer} from "@mui/material";
import Header from "../headers/header";
import Footer from "../footers/footer";
import DrawerContent from "./drawer-content";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import React from "react";

const Layout = ({children}) => {
    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    maxWidth: "100vw",
                    backgroundColor: "background.default",
                    overflowX: "hidden",
                    "&:hover": {
                        "-webkit-scrollbar": {
                            display: "none"
                        }
                    }
                }}>
                <Box>
                    <Header/>
                </Box>
                <Box sx={{flexGrow: 1}}>
                    {children}
                </Box>
                <Box>
                    <Footer/>
                </Box>
            </Box>
            <SwipeableDrawer
                open={drawerOpen}
                onClose={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())}>
                <DrawerContent/>
            </SwipeableDrawer>
        </React.Fragment>

    )
}

export default Layout;