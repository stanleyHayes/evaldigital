import {Link, useLocation} from "react-router-dom";
import {Typography} from "@mui/material";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch} from "react-redux";

const SidebarLink = ({path, label}) => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.toggleDrawer());
    }
    return (
        <Link
            to={path}
            style={{
                textDecoration: 'none',
                width: "100%",
                backgroundColor: path === pathname ? "rgba(255,255,255,0.1)" : false,
                borderRadius: 8,
                padding: 12,
                display: "block"
            }}
            onClick={handleClick}>
            <Typography
                variant="body2"
                sx={{
                    color: path === pathname ? "text.primary" : "text.secondary",
                    fontWeight: path === pathname ? 700 : 400,
                    textTransform: "uppercase"
                }}>{label}</Typography>
        </Link>
    )
}

export default SidebarLink;