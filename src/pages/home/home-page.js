import Layout from "../../components/shared/layout";
import {Box, Button, Container, Divider, Grid, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {ArrowCircleRight} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectPortfolio} from "../../redux/features/portfolio/portfolio-slice";
import Project from "../../components/shared/project";
import {EVAL_DIGITAL_DATA} from "../../utils/data";
import Service from "../../components/shared/service";

const HomePage = () => {
    const {portfolio} = useSelector(selectPortfolio);
    return (
        <Layout>
            <Box sx={{py: 7.1}}>
                <Box
                    whileInView={{y: 0, opacity: 1, transition: {duration: 1}}}
                    initial={{y: "10vh", opacity: 0}}
                    component={motion.div}
                    sx={{
                        minHeight: {xs: "50vh", md: "60vh", lg: "50vh"},
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "background.alternative",
                        py: 8
                    }}>
                    <Container>
                        <Typography
                            align="center"
                            sx={{color: "text.primary", fontWeight: 700, mb: 2}}
                            variant="h1">
                            Enva Digital
                        </Typography>
                        <Typography
                            align="center"
                            sx={{color: "text.secondary", mb: 4}}
                            variant="body1">
                            Modern web and mobile applications for entrepreneurs and companies
                        </Typography>
                        <Grid container={true} spacing={4} justifyContent="center" alignItems="center">
                            <Grid item={true} xs={6} md={3}>
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
                                        Projects
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: "background.paper"}}>
                    <Container>
                        <Grid container={true} justifyContent="space-between">
                            <Grid item={true} xs={12} md={4}>
                                <Typography
                                    sx={{color: "text.primary", fontWeight: 700, mb: 2}}
                                    variant="h3">
                                    Welcome
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={8}>
                                <Typography
                                    sx={{color: "text.secondary", mb: 4}}
                                    variant="body1">
                                    We're a group of thinkers, designers, writers and developer who take product and
                                    marketing ideas from zero to one and beyond. What makes us different is our
                                    experience
                                    in the tech space, results-driven approach and uncompromising creative process.
                                </Typography>
                                <Typography
                                    sx={{color: "text.primary", mb: 1}}
                                    variant="h5">
                                    Want to talk?
                                </Typography>
                                <MUILink href="mailto://hello@envadigital.com" underline="none">
                                    <Typography
                                        variant="body1"
                                        sx={{color: 'text.secondary'}}>
                                        hello@envadigital.com
                                    </Typography>
                                </MUILink>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: "background.paper"}}>
                    <Container>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography
                                sx={{color: "text.primary", fontWeight: 700}}
                                variant="h4">
                                Work
                            </Typography>
                            <Link to="/portfolio" style={{textDecoration: "none"}}>
                                <Button
                                    endIcon={<ArrowCircleRight/>}
                                    variant="text"
                                    size="large"
                                    sx={{
                                        textTransform: "none",
                                        color: "white",
                                    }}>
                                    See More
                                </Button>
                            </Link>
                        </Stack>

                        <Divider variant="fullWidth" sx={{my: 3}}/>

                        <Grid container={true} spacing={4}>
                            {portfolio?.slice?.(0, 4)?.map((project, index) => {
                                return (
                                    <Grid item={true} key={index} xs={12} md={6}>
                                        <Project project={project}/>
                                    </Grid>
                                )
                            })}
                        </Grid>

                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: "background.default"}}>
                    <Container>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography
                                sx={{color: "text.primary", fontWeight: 700}}
                                variant="h4">
                                Services
                            </Typography>
                            <Link to="/portfolio" style={{textDecoration: "none"}}>
                                <Button
                                    endIcon={<ArrowCircleRight/>}
                                    variant="text"
                                    size="large"
                                    sx={{textTransform: "none", color: "white"}}>
                                    See More
                                </Button>
                            </Link>
                        </Stack>

                        <Divider variant="fullWidth" sx={{my: 3}}/>

                        <Grid container={true} spacing={4}>
                            {EVAL_DIGITAL_DATA.SERVICES.map((service, index) => {
                                return (
                                    <Grid item={true} key={index} xs={12} md={6} lg={3}>
                                        <Service service={service}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: "background.paper"}}>
                    <Container>
                        <Grid container={true} justifyContent="space-between">
                            <Grid item={true} xs={12} md={4}>
                                <Typography
                                    sx={{color: "text.primary", fontWeight: 700, mb: 2}}
                                    variant="h3">
                                    Reference
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={8}>
                                <Typography
                                    sx={{color: "text.secondary", mb: 4}}
                                    variant="body1">
                                    Our software company has had the privilege of working with a diverse range of
                                    clients, including startups, small and medium-sized enterprises (SMEs), and large
                                    corporations. We have provided innovative software solutions tailored to meet their
                                    specific needs and help them achieve their business goals.
                                </Typography>
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

export default HomePage;