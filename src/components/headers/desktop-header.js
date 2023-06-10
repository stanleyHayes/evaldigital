import {Button, CardMedia, Container, Grid, Stack, Toolbar, Typography, Link as MUILink} from "@mui/material";
import logo from "./../../assets/images/logo.png";
import NavbarLink from "../shared/navbar-link";
import {Link} from "react-router-dom";
import {MenuOutlined} from "@mui/icons-material";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const DesktopHeader = () => {

    const {language} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Toolbar>
            <Container maxWidth="xl">
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs="auto">
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Link to="/" style={{textDecoration: "none"}}>
                                <CardMedia
                                    component="img"
                                    sx={{height: 40, objectFit: "contain", width: 40}}
                                    src={logo}
                                />
                            </Link>
                            <MUILink href="mailto://hello@envadigital.com" underline="none">
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{color: 'text.primary'}}>
                                    hello
                                </Typography>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{color: 'text.secondary'}}>
                                    @envadigital.com
                                </Typography>
                            </MUILink>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs="auto">
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textTransform: "uppercase",
                                        color: language === 'DE' ? 'text.primary' : 'text.secondary'
                                    }}>
                                    De
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textTransform: "uppercase",
                                        color: language === 'EN' ? 'text.primary' : 'text.secondary'
                                    }}>
                                    En
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography
                                    variant="body2"
                                    sx={{textTransform: "uppercase", color: 'text.primary'}}>
                                    Menu
                                </Typography>
                                <MenuOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())}
                                    sx={{
                                        borderWidth: 1,
                                        borderColor: "icon.border",
                                        borderStyle: "solid",
                                        backgroundColor: "icon.background",
                                        fontSize: 32,
                                        padding: 0.5,
                                        color: "icon.secondary",
                                        borderRadius: "100%"
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader;