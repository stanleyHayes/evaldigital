import {Button, Card, CardContent, CardMedia, Chip, Grid, Stack, Typography} from "@mui/material";
import {ArrowCircleRight} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Project = ({project}) => {
    return (
        <Card elevation={0} sx={{}}>
            <CardContent>
                <CardMedia
                    component="img"
                    sx={{height: 300, borderRadius: 1, objectFit: "cover", mb: 2}}
                    src={project.banner.secure_url}
                />
                <Stack spacing={2}>
                    <Stack spacing={2} justifyContent="space-between" direction="row" alignItems="center">
                        <Typography variant="h5" sx={{color: "text.primary"}}>
                            {project.title}
                        </Typography>

                        <Stack spacing={2} direction="row">
                            {project.tags.map(tag => {
                                return (
                                    <Chip
                                        key={tag}
                                        size="small"
                                        sx={{backgroundColor: ""}}
                                        label={
                                            <Typography variant="body2" sx={{color: "text.primary", fontSize: 12}}>
                                                {tag}
                                            </Typography>
                                        }
                                    />
                                )
                            })}
                        </Stack>
                    </Stack>
                    <Link to="/portfolio" style={{textDecoration: "none"}}>
                        <Button
                            endIcon={<ArrowCircleRight/>}
                            variant="outlined"
                            size="medium"
                            sx={{
                                textTransform: "none",
                                color: "white",
                                borderColor: "rgba(255, 255, 255, 0.45)",
                                borderStyle: "solid",
                                borderWidth: 1
                            }}>
                            See More
                        </Button>
                    </Link>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Project;