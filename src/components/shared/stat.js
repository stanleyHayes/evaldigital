import {Stack, Typography} from "@mui/material";
import CountUp from "react-countup";

const Stat = ({value, title}) => {
    return (
        <Stack sx={{position: "relative"}}>
            <CountUp
                redraw={true}
                formattingFn={value => `${value}+`}
                style={{
                    fontSize: 100,
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "GoogleSans",
                    textAlign: "center"
                }}
                end={value}
                duration={40}
            />
            <Typography
                align="center"
                variant="body1"
                sx={{
                    color: "rgba(255,255,225,0.85)",
                }}>
                {title}
            </Typography>
        </Stack>
    )
}

export default Stat;