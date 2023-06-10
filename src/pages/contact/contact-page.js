import Layout from "../../components/shared/layout";
import {Box, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg";
import orangeCat from "../../assets/images/clay-banks-POzx_amnWJw-unsplash.jpg";
import ContactForm from "../../components/shared/contact-form";
import {motion} from "framer-motion";

const ContactPage = () => {
    return (
        <Layout>
            <Box sx={{py: 7.1}}>
                <Box
                    sx={{
                        backgroundImage: `url(${banner})`,
                        backgroundColor: "background.transparent",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundBlendMode: "overlay",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        minHeight: "30vh"
                    }}>
                    <Container>
                        <Typography
                            align="center"
                            sx={{
                                backgroundImage: "linear-gradient(to right, #EFE7E2 , #ffffff)",
                                backgroundClip: "text",
                                color: "transparent",
                                mb: 2,
                                fontWeight: 700
                            }}
                            variant="h2">
                            Contact Us
                        </Typography>
                    </Container>
                </Box>

                <Box
                    sx={{
                        borderBottomRightRadius: {xs: 32},
                        borderBottomLeftRadius: {xs: 32},
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "background.default",
                        py: 8
                    }}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="space-between">
                            <Grid
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                initial={{
                                    x: "-10vw",
                                    opacity: 0
                                }}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={6}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        objectFit: "contain",
                                        borderTopRightRadius: 64,
                                        borderTopLeftRadius: 128,
                                        borderBottomLeftRadius: "5%",
                                        borderBottomRightRadius: "5%",
                                    }}
                                    src={orangeCat}
                                />
                            </Grid>
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
                                item={true} xs={12} md={6} lg={6}>
                                <Box>
                                    <Stack direction="column" spacing={4}>
                                        <Typography
                                            sx={{color: "secondary.main", textTransform: "uppercase"}}
                                            variant="body1">
                                            MESSAGE US
                                        </Typography>
                                        <Typography
                                            sx={{
                                                backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                                backgroundClip: "text",
                                                color: "transparent",
                                                mb: 4
                                            }}
                                            variant="h4">
                                            We Are Willing To Help. Start By Simply Filling And Submitting The Form
                                            Below
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
            </Box>
        </Layout>
    )
}

export default ContactPage;