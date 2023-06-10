import {Box, Button, CardMedia, Container, Stack} from "@mui/material";
import SidebarLink from "./sidebar-link";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch} from "react-redux";

const DrawerContent = () => {
    const dispatch = useDispatch();
    return (
        <Box sx={{py: 4, minWidth: {xs: "90vw", md: "20vw"}}}>
            <Container sx={{px: 6}}>
                <Stack direction="column" spacing={4}>

                    <CardMedia
                        component="img"
                        sx={{height: 150, objectFit: "contain", width: 150}}
                        src={logo}
                    />

                    <SidebarLink label="Home" path="/"/>
                    <SidebarLink label="Portfolio" path="/portfolio"/>
                    <SidebarLink label="Contact" path="/contact"/>

                    <Link
                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())}
                        to="/portfolio"
                        style={{textDecoration: "none"}}>
                        <Button
                            disableElevation={true}
                            variant="outlined"
                            size="large"
                            fullWidth={true}
                            sx={{
                                textTransform: "none",
                                color: "white",
                                borderColor: "rgba(255, 255, 255, 0.45)",
                                borderStyle: "solid",
                                borderWidth: 1
                            }}>
                            Let's Talk
                        </Button>
                    </Link>
                </Stack>
            </Container>
        </Box>
    )
}


export default DrawerContent