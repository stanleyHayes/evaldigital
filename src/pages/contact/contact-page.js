import Layout from "../../components/shared/layout";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import ContactForm from "../../components/shared/contact-form";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const ContactPage = () => {
    return (
        <Layout>
            <Box sx={{py: 7.1}}>
                <Box
                    sx={{
                        backgroundColor: "background.transparent",
                        display: "flex",
                        alignItems: "center",
                        minHeight: "30vh",
                        justifyContent: "flex-start"
                    }}>
                    <Container>
                        <Typography sx={{color: "text.primary", fontWeight: 700, mb: 2}} variant="h2">
                            Contact Us
                        </Typography>
                        <Typography sx={{color: "text.secondary"}} variant="body1">
                            Contact us now to realize the project
                        </Typography>
                    </Container>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        py: 8
                    }}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="center">
                            <Grid
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                initial={{
                                    x: "10vw",
                                    opacity: 0
                                }}
                                component={motion.div}
                                item={true} xs={12} md={8} lg={8}>
                                <Box>
                                    <Stack direction="column" spacing={4}>
                                        <Typography
                                            align="center"
                                            sx={{color: "rgba(0, 0, 0, 0.90)", fontWeight: "bold"}}
                                            variant="h4">
                                            Leave us a message
                                        </Typography>

                                        <Box>
                                            <ContactForm/>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box sx={{py: 8, backgroundColor: "background.default"}}>
                    <Container>
                        <Typography
                            align="center"
                            sx={{color: "text.primary", fontWeight: 700, mb: 2}}
                            variant="h4">
                            Have a project for us?
                        </Typography>
                        <Typography
                            align="center"
                            sx={{color: "text.secondary", mb: 4}}
                            variant="body1">Are you looking to take your business to new heights and achieve
                            unparalleled success in your industry? We invite you to have a conversation with us, where
                            we can discuss how our expertise and solutions can drive your business forward.
                        </Typography>
                        <Grid container={true} spacing={4} justifyContent="center" alignItems="center">
                            <Grid item={true} xs={6} md={4}>
                                <Link to="/portfolio" style={{textDecoration: "none"}}>
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
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default ContactPage;