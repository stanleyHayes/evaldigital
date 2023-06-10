import Layout from "../../components/shared/layout";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import notFound from "./../../assets/animation/404.json";
import Lottie from "lottie-react";


const NotFoundPage = () => {
    return (
        <Layout>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '98vh'}}>
                <Container sx={{my: 4}}>
                    <Stack justifyContent="center" mb={2} alignItems="center">
                        <Box sx={{height: 350, width: 350}}>
                            <Lottie animationData={notFound} loop={true}/>
                        </Box>
                    </Stack>
                    <Typography mb={2} sx={{color: 'text.primary'}} align="center" variant="h5">
                        Page not found
                    </Typography>
                    <Typography sx={{color: 'text.secondary', mb: 4}} align="center" variant="body1">
                        The page you requested for could not be found on the server
                    </Typography>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md="auto">
                            <Link
                                to=""
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
                                    Back Home
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default NotFoundPage;