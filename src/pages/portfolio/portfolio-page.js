import Layout from "../../components/shared/layout";
import {Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg";
import orangeCat from "../../assets/images/clay-banks-POzx_amnWJw-unsplash.jpg";
import {Lightbulb, TipsAndUpdates} from "@mui/icons-material";
import {motion} from "framer-motion";


const container = {
    whileInView: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.02,
            staggerDirection: 1,
            when: "beforeChildren",
            type: "spring",
            stiffness: 150
        }
    },
    initial: {
        opacity: 0,
        y: '10vh',
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
            when: "afterChildren",
            type: "spring",
            stiffness: 100
        }
    }
}

const item = {
    whileInView: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    initial: {
        y: '10vh',
        opacity: 0
    }
}


const PortfolioPage = () => {
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
                                fontWeight: 700,
                                mb: 2
                            }}
                            variant="h2">
                            About Us
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
                    <Container maxWidth="xl">
                        <Grid container={true} spacing={4} justifyContent="space-between">
                            <Grid item={true} xs={12} md={6} lg={4}>
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
                            <Grid item={true} xs={12} md={6} lg={8}>
                                <Box>
                                    <Stack
                                        variants={container}
                                        component={motion.div}
                                        initial="initial"
                                        whileInView="whileInView"
                                        exit="initial"
                                        direction="column" spacing={4}>
                                        <Stack
                                            variants={item}
                                            component={motion.div}
                                            direction="column" spacing={2}>
                                            <Typography
                                                sx={{color: "secondary.main", textTransform: "uppercase"}}
                                                variant="body1">
                                                FUNDRAISING FOR ALL
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                    mb: 4
                                                }}
                                                variant="h3">
                                                About World Support Foundation
                                            </Typography>
                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                World Support Foundation is a non-profit grant foundation committed to
                                                making a positive and lasting impact on communities worldwide. Our
                                                foundation was established with the vision of creating a better world by
                                                supporting initiatives that address critical social, economic, and
                                                environmental challenges.
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            variants={item}
                                            component={motion.div}
                                            direction="column" spacing={2}>
                                            <Typography
                                                sx={{
                                                    backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                    mb: 4
                                                }}
                                                variant="h3">
                                                Application Process
                                            </Typography>
                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                World Support Foundation invites organizations and individuals to submit
                                                grant proposals that align with our mission and focus areas. Our
                                                rigorous evaluation process ensures that projects selected for funding
                                                have a strong potential for impact and sustainability. Detailed
                                                guidelines and application instructions are available on our website
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            variants={item}
                                            component={motion.div}
                                            direction="column" spacing={2}>
                                            <Typography
                                                sx={{
                                                    backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                }}
                                                variant="h3">
                                                Join Us
                                            </Typography>
                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                We believe that creating a better world requires collective effort. We
                                                invite individuals, corporations, and philanthropists to join us in our
                                                mission. Whether through financial contributions, volunteering, or
                                                partnerships, your support can make a significant difference in
                                                transforming lives and shaping a brighter future for communities
                                                worldwide.
                                            </Typography>
                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                Together, let's build a world of support and opportunity for all.
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>


                <Box
                    sx={{
                        borderBottomRightRadius: {xs: 32},
                        borderBottomLeftRadius: {xs: 32},
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "background.paper",
                        py: 8
                    }}>
                    <Container maxWidth="xl">
                        <Grid
                            variants={container}
                            component={motion.div}
                            initial="initial"
                            whileInView="whileInView"
                            exit="initial"
                            container={true} spacing={4} justifyContent="space-between">
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.alternative", height: "100%"}}>
                                    <CardContent>
                                        <Lightbulb
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 48,
                                                padding: 1,
                                                color: "secondary.main",
                                                borderRadius: "25%",
                                                cursor: "pointer"
                                            }}
                                        />
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Mission
                                        </Typography>
                                        <Typography sx={{color: "text.primary"}} variant="body2">
                                            Our mission is to empower individuals and organizations to drive sustainable
                                            change and improve the lives of people around the globe. We strive to
                                            achieve this by providing financial grants, resources, and expertise to
                                            projects and programs that align with our core values and objectives..
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.alternative", height: "100%"}}>
                                    <CardContent>
                                        <TipsAndUpdates
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 48,
                                                padding: 1,
                                                color: "secondary.main",
                                                borderRadius: "25%",
                                                cursor: "pointer"
                                            }}
                                        />
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Vision
                                        </Typography>
                                        <Typography sx={{color: "text.primary"}} variant="body2">
                                            A world where the diversity of life thrives, and people act to conserve
                                            nature for its own sake and its ability to fulfill our needs and enrich our
                                            lives.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box
                    sx={{
                        borderBottomRightRadius: {xs: 32},
                        borderBottomLeftRadius: {xs: 32},
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "background.paper",
                        py: 8
                    }}>
                    <Container maxWidth="xl">
                        <Typography
                            sx={{
                                backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                backgroundClip: "text",
                                color: "transparent",
                                mb: 4
                            }}
                            variant="h3">
                            Values
                        </Typography>
                        <Grid
                            variants={container}
                            component={motion.div}
                            initial="initial"
                            whileInView="whileInView"
                            exit="initial"
                            container={true} spacing={4} justifyContent="space-between">
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.alternative", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Impact
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We prioritize projects that have a significant and measurable impact on
                                            communities, fostering sustainable development and positive change..
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.alternative", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Collaboration
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We believe in the power of collaboration and actively seek partnerships with
                                            like-minded organizations, governments, and individuals to amplify our
                                            collective impact..
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.alternative", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Empowerment
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We are committed to empowering individuals and communities by supporting
                                            initiatives that enhance education, promote entrepreneurship, and foster
                                            self-sufficiency.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.alternative", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Equality and Inclusivity
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We are dedicated to promoting equality and inclusivity in all our endeavors,
                                            ensuring that marginalized and underrepresented groups have equal access to
                                            opportunities and resources.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.alternative", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Innovation
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We encourage innovative solutions and ideas that tackle complex societal
                                            challenges and drive progress in areas such as healthcare, education,
                                            poverty alleviation, and environmental sustainability.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box
                    sx={{
                        borderBottomRightRadius: {xs: 32},
                        borderBottomLeftRadius: {xs: 32},
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "background.alternative",
                        py: 8
                    }}>
                    <Container maxWidth="xl">
                        <Typography
                            sx={{
                                backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                backgroundClip: "text",
                                color: "transparent",
                                mb: 2
                            }}
                            variant="h3">
                            Grant Focus Areas
                        </Typography>
                        <Typography sx={{color: "text.primary", mb: 4}} variant="body2">
                            World Support Foundation supports projects across various focus areas, including:
                        </Typography>
                        <Grid
                            variants={container}
                            component={motion.div}
                            initial="initial"
                            whileInView="whileInView"
                            exit="initial"
                            container={true} spacing={4} justifyContent="space-between">
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.paper", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Education
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We believe that education is a catalyst for social transformation. We
                                            support initiatives that enhance access to quality education, improve
                                            educational infrastructure, and promote skill development.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.paper", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Healthcare
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We strive to improve healthcare outcomes by funding projects that address
                                            healthcare disparities, strengthen healthcare systems, and promote
                                            preventive care and wellness.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.paper", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Environmental Sustainability
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We are committed to protecting our planet for future generations. We support
                                            projects that focus on conservation, renewable energy, waste management, and
                                            initiatives aimed at mitigating the effects of climate change.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                variants={item}
                                component={motion.div}
                                item={true} xs={12} md={6} lg={4}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{padding: 3, backgroundColor: "background.paper", height: "100%"}}>
                                    <CardContent>
                                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                                            Community Development
                                        </Typography>
                                        <Typography sx={{color: "text.secondary"}} variant="body2">
                                            We invest in projects that promote community development, including
                                            initiatives related to livelihood improvement, women empowerment, and social
                                            inclusion.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default PortfolioPage;