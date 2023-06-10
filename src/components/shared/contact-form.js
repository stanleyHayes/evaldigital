import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    Grid, LinearProgress,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {CONTACT_ACTION_CREATORS, selectContact} from "../../redux/features/contact/contact-slice";

const ContactForm = () => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(selectContact);

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: ""
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({}).shape({
            first_name: yup.string().required('Name required'),
            last_name: yup.string().required('Last required'),
            email: yup.string().required('Email required').email('Enter valid email'),
            subject: yup.string().required('Subject required'),
            message: yup.string().required('Message required')
        }),
        onSubmit: (values, {resetForm}) => {
            dispatch(CONTACT_ACTION_CREATORS.sendMessage({values, resetForm}));
        }
    });


    return (
        <Card elevation={0} sx={{height: "100%", backgroundColor: "white"}}>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <CardContent>
                {error && (
                    <Alert sx={{my: 2}} severity="error">
                        <AlertTitle>{error}</AlertTitle>
                    </Alert>
                )}
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2}>
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <FormControl fullWidth={true}>
                                        <Typography variant="body2" sx={{mb: 1, color: "rgba(0, 0, 0, 0.85)"}}>
                                            First Name
                                        </Typography>
                                        <OutlinedInput
                                            name="first_name"
                                            id="first_name"
                                            fullWidth={true}
                                            placeholder="Enter your first name"
                                            value={formik.values.first_name}
                                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{
                                                borderRadius: 0.25,
                                                borderWidth: '1px',
                                                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                color: 'rgba(0, 0, 0, 0.85)',
                                                "::placeholder": {
                                                    color: "rgba(0, 0, 0, 0.1)"
                                                }
                                            }}
                                        />
                                        {formik.touched.first_name && formik.errors.first_name && (
                                            <FormHelperText>
                                                {formik.errors.first_name}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <FormControl fullWidth={true}>
                                            <Typography variant="body2" sx={{mb: 1, color: "rgba(0, 0, 0, 0.85)"}}>
                                                Last Name
                                            </Typography>
                                            <OutlinedInput
                                                name="last_name"
                                                id="last_name"
                                                fullWidth={true}
                                                placeholder="Enter your last name"
                                                value={formik.values.last_name}
                                                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                sx={{
                                                    borderRadius: 0.25,
                                                    borderWidth: '1px',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                    color: 'rgba(0, 0, 0, 0.85)',
                                                    "::placeholder": {
                                                        color: "rgba(0, 0, 0, 0.1)"
                                                    }
                                                }}
                                            />
                                            {formik.touched.last_name && formik.errors.last_name && (
                                                <FormHelperText>
                                                    {formik.errors.last_name}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <FormControl fullWidth={true}>
                                <Typography variant="body2" sx={{mb: 1, color: "rgba(0, 0, 0, 0.85)"}}>
                                    Email
                                </Typography>
                                <OutlinedInput
                                    name="email"
                                    id="email"
                                    fullWidth={true}
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formik.values.email}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        borderRadius: 0.25,
                                        borderWidth: '1px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                        color: 'rgba(0, 0, 0, 0.85)',
                                        "::placeholder": {
                                            color: "rgba(0, 0, 0, 0.1)"
                                        }
                                    }}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <FormHelperText>
                                        {formik.errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth={true}>
                                <Typography variant="body2" sx={{mb: 1, color: "rgba(0, 0, 0, 0.85)"}}>
                                    Subject
                                </Typography>
                                <OutlinedInput
                                    name="subject"
                                    id="subject"
                                    fullWidth={true}
                                    type="text"
                                    placeholder="Enter your subject"
                                    value={formik.values.subject}
                                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        borderRadius: 0.25,
                                        borderWidth: '1px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                        color: 'rgba(0, 0, 0, 0.85)',
                                        "::placeholder": {
                                            color: "rgba(0, 0, 0, 0.1)"
                                        }
                                    }}
                                />
                                {formik.touched.subject && formik.errors.subject && (
                                    <FormHelperText>
                                        {formik.errors.subject}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth={true}>
                                <Typography variant="body2" sx={{mb: 1, color: "rgba(0, 0, 0, 0.85)"}}>
                                    Message
                                </Typography>
                                <OutlinedInput
                                    name="message"
                                    id="message"
                                    fullWidth={true}
                                    type="text"
                                    multiline={true}
                                    minRows={4}
                                    placeholder="Enter your message"
                                    value={formik.values.message}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        borderRadius: 0.25,
                                        borderWidth: '1px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                        color: 'rgba(0, 0, 0, 0.85)',
                                        "::placeholder": {
                                            color: "rgba(0, 0, 0, 0.1)"
                                        }
                                    }}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <FormHelperText>
                                        {formik.errors.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Button
                            fullWidth={true}
                            type="submit"
                            disableElevation={true}
                            variant="contained"
                            disabled={loading}
                            size="large"
                            color="secondary"
                            sx={{
                                backgroundColor: "rgba(0, 0, 0, 1)",
                                color: "white",
                                textTransform: "none",
                                borderRadius: 0.25,
                                py: {xs: 1.5, lg: 0.75}
                            }}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm;
