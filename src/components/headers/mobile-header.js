import {Button, CardMedia, Grid, Stack, Toolbar, Typography} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";

const MobileHeader = () => {
    const dispatch = useDispatch();
    const {language} = useSelector(selectUI);
    return (
        <Toolbar>
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true} xs="auto">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <CardMedia
                            component="img"
                            sx={{height: 40, objectFit: "contain", width: 40}}
                            src={logo}
                        />
                    </Link>
                </Grid>
                <Grid item={true} xs="auto">
                    <Stack alignItems="center" direction="row" spacing={1}>
                        <Typography
                            variant="bod2"
                            sx={{
                                textTransform: "uppercase",
                                color: language === 'DE' ? 'text.primary': 'text.secondary'
                        }}>
                            De
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textTransform: "uppercase",
                                color: language === 'EN' ? 'text.primary': 'text.secondary'
                        }}>
                            En
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
                                borderRadius: "25%",
                                cursor: "pointer"
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;