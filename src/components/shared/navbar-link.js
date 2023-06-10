import {Link, useLocation} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch} from "react-redux";

const NavbarLink = ({path, label}) => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();

    return (
        <Box sx={{position: "relative"}}>
            <Link onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())} to={path} style={{textDecoration: 'none'}}>
                <Typography
                    variant="body1"
                    sx={{
                        color: path === pathname ? "secondary.main" : "text.secondary",
                        fontWeight: path === pathname ? 700 : 400,
                        textTransform: "uppercase"
                }}>{label}</Typography>
            </Link>
        </Box>
    )
}

export default NavbarLink;