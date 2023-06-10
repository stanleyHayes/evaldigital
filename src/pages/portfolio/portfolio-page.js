import Layout from "../../components/shared/layout";
import {Box, Button, Container, Divider, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Project from "../../components/shared/project";
import {useSelector} from "react-redux";
import {selectPortfolio} from "../../redux/features/portfolio/portfolio-slice";

const PortfolioPage = () => {
    const {portfolio} = useSelector(selectPortfolio);
    return (
        <Layout>
            <Box sx={{py: 7.1}}>
                <Box
                    sx={{
                        backgroundColor: "background.alternative",
                        display: "flex",
                        alignItems: "center",
                        minHeight: "30vh",
                        justifyContent: "flex-start"
                    }}>
                    <Container>
                        <Typography sx={{color: "text.primary", fontWeight: 700, mb: 2}} variant="h2">
                            Projects
                        </Typography>
                        <Typography sx={{color: "text.secondary"}} variant="body1">
                            Take a look at the projects we have implemented
                        </Typography>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: "background.paper"}}>
                    <Container>
                            <Typography
                                sx={{color: "text.primary", fontWeight: 700}}
                                variant="h4">
                                Work
                            </Typography>

                        <Divider variant="fullWidth" sx={{my: 3}}/>

                        <Grid container={true} spacing={4}>
                            {portfolio?.map((project, index) => {
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

export default PortfolioPage;