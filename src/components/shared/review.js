import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";

const Review = ({review}) => {
    return (
        <Card elevation={0} sx={{backgroundColor: "background.alternative", height: "100%"}}>
            <CardContent>
                <Typography variant="body2" sx={{color: "text.secondary", fontStyle: "italic"}}>
                    {review.text}
                </Typography>
            </CardContent>
            <CardHeader
                avatar={<Avatar sx={{height: 60, width: 60}} src={review.user.image}/>}
                title={
                    <Typography variant="body1" sx={{color: "text.primary", fontWeight: "bold"}}>
                        {review.user.name}
                    </Typography>
                }
                subheader={
                    <Typography variant="body2" sx={{color: "text.secondary",textTransform: "uppercase"}}>
                        {review.user.role}
                    </Typography>
                }
            />
        </Card>
    )
}

export default Review;