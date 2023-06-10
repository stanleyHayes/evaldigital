import {Box, CardMedia, Container, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: "background.paper",
            py: 8
        }}>
            <Container maxWidth="xl">
                <Stack direction="row" justifyContent="center">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <CardMedia
                            component="img"
                            sx={{height: 150, objectFit: "contain", width: 150, mb: 4}}
                            src={logo}
                        />
                    </Link>
                </Stack>
                <Stack sx={{mb: 4}} spacing={1}>
                    <Typography align="center" variant="h4" sx={{color: "text.primary"}}>
                        Contact Us
                    </Typography>
                    <Typography align="center" variant="h4" sx={{color: "text.primary"}}>
                        For More Information
                    </Typography>
                    <MUILink href="mailto://hello@envadigital.com" underline="always">
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{color: 'text.secondary'}}>
                            hello@envadigital.com
                        </Typography>
                    </MUILink>
                </Stack>
                <Typography align="center" variant="body2" sx={{color: "text.secondary"}}>
                    &copy; 2023 Enva Digital. All rights Reserved.
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer;