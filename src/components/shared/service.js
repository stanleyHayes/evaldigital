import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const Service = ({service}) => {
    return (
        <Card sx={{backgroundColor: "background.transparent", height: "100%"}} elevation={0} variant="elevation">
            <CardContent>
                <Stack spacing={2}>
                    <Stack sx={{justifyContent: {xs: "center", md: "flex-start"}}} direction="row" spacing={2}>
                        <CardMedia
                            component="img"
                            sx={{height: 40, objectFit: "contain", width: 40}}
                            src={service.image}
                        />
                    </Stack>
                    <Typography
                        variant="body1"
                        sx={{color: "text.primary", fontWeight: "bold", textAlign: {xs: "center", md: "left"}}}>
                        {service.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{color: "text.secondary", textAlign: {xs: "center", md: "left"}}}>
                        {service.description}
                    </Typography>
                </Stack>

            </CardContent>
        </Card>
    )
}

export default Service;