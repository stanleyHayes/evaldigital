import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    LinearProgress,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Switch,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {useEffect, useState} from "react";
import {red} from "@mui/material/colors";
import {Remove} from "@mui/icons-material";

import imageUpload from "./../../assets/images/default-image.png";
import {DatePicker} from "@mui/x-date-pickers";
import moment from "moment";
import {WSF_DATA} from "../../utils/data";
import {useDispatch, useSelector} from "react-redux";
import {APPLICATION_ACTION_CREATORS, selectApplication} from "../../redux/features/application/application-slice";

const GrantForm = () => {

    const [front, setFront] = useState(undefined);
    const [base64Front, setBase64Front] = useState(null);
    const [frontPreview, setFrontPreview] = useState(null);

    const [back, setBack] = useState(undefined);
    const [base64Back, setBase64Back] = useState(null);
    const [backPreview, setBackPreview] = useState(null);

    const [dob, setDOB] = useState(moment());
    const [agreed, setAgreed] = useState(false);

    const {loading, error} = useSelector(selectApplication);
    const dispatch = useDispatch();

    const handleDOBChange = date => {
        setDOB(date);
    }

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            health_status: "",
            gender: "",
            state: "",
            code: "",
            home_address: "",
            grant_amount: "",
            grant_category: "",
            ssn: "",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({}).shape({
            first_name: yup.string().required('Name required'),
            last_name: yup.string().required('Last required'),
            email: yup.string().required('Email required').email('Enter valid email'),
            phone: yup.string().required('Phone required'),
            ssn: yup.string().required('SSN required'),
            grant_category: yup.string().required('Grant category required'),
            grant_amount: yup.string().required('Grant amount required'),
            home_address: yup.string().required('Home address required'),
            state: yup.string().required('State required'),
            code: yup.string().required('Zip code required'),
            health_status: yup.string().oneOf(['sick', 'healthy', 'disabled']).required('health status required'),
            gender: yup.string().oneOf(['male', 'female']).required('Sex required'),
        }),
        onSubmit: (values, {resetForm}) => {
            if (!base64Front || !base64Back) {
                return;
            }

            if (!dob) {
                return;
            }

            dispatch(APPLICATION_ACTION_CREATORS.createApplication({
                values: {...values, frontIDImage: base64Front, backIDImage: base64Back, dob},
                resetForm,
                handleBackRemoved,
                handleFrontRemoved
            }));
        }
    });

    useEffect(() => {
        if (!front) {
            setFrontPreview(undefined);
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(front);
        reader.onload = () => {
            setBase64Front(reader.result);
        }

        const coverURL = URL.createObjectURL(front);
        setFrontPreview(coverURL);

        return () => URL.revokeObjectURL(coverURL);
    }, [front]);

    const handleFrontSelected = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setFront(undefined);
            return;
        }
        setFront(event.target.files[0]);
    }

    const handleFrontRemoved = () => {
        setFrontPreview(undefined);
        setFront(undefined);
        setBase64Front(undefined);
    }

    useEffect(() => {
        if (!back) {
            setBackPreview(undefined);
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(back);
        reader.onload = () => {
            setBase64Back(reader.result);
        }

        const backURL = URL.createObjectURL(back);
        setBackPreview(backURL);

        return () => URL.revokeObjectURL(backURL);
    }, [back]);

    const handleBackSelected = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setBack(undefined);
            return;
        }
        setBack(event.target.files[0]);
    }

    const handleBackRemoved = () => {
        setBackPreview(undefined);
        setBack(undefined);
        setBase64Back(undefined);
    }


    return (
        <Card elevation={0} sx={{height: "100%"}}>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <CardContent>
                {error && (
                    <Alert sx={{my: 2}} severity="error">
                        <AlertTitle>{error}</AlertTitle>
                    </Alert>
                )}
                <form onSubmit={formik.handleSubmit}>
                    <Stack sx={{mb: 4}} spacing={2}>
                        <Typography
                            sx={{
                                backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                            variant="h3">
                            Personal Information
                        </Typography>
                        <Divider variant="fullWidth" light={true} sx={{my: 4}}/>
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <FormControl fullWidth={true}>
                                        <Typography variant="body2" sx={{mb: 1}}>
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
                                            <Typography variant="body2" sx={{mb: 1}}>
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
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <FormControl fullWidth={true}>
                                        <Typography variant="body2" sx={{mb: 1}}>
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
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <FormHelperText>
                                                {formik.errors.email}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <FormControl fullWidth={true}>
                                            <Typography variant="body2" sx={{mb: 1}}>
                                                Phone
                                            </Typography>
                                            <OutlinedInput
                                                name="phone"
                                                id="phone"
                                                fullWidth={true}
                                                type="tel"
                                                placeholder="Enter your phone"
                                                value={formik.values.phone}
                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.phone && formik.errors.phone && (
                                                <FormHelperText>
                                                    {formik.errors.phone}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{mb: 2}}>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <InputLabel id="gender">Gender</InputLabel>
                                        <Select
                                            name="gender"
                                            onChange={formik.handleChange}
                                            size="medium"
                                            label="Gender"
                                            value={formik.values.gender}
                                            variant="outlined">
                                            <MenuItem value="male">Male</MenuItem>
                                            <MenuItem value="female">Female</MenuItem>
                                        </Select>
                                        <FormHelperText>
                                            {formik.touched.gender && formik.errors.gender && (
                                                <Typography variant="body2" sx={{color: red[400]}}>
                                                    {formik.errors.gender}
                                                </Typography>
                                            )}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <InputLabel id="health">Health Status</InputLabel>
                                        <Select
                                            name="health_status"
                                            onChange={formik.handleChange}
                                            size="medium"
                                            label="Health status"
                                            value={formik.values.health_status}
                                            variant="outlined">
                                            <MenuItem value="healthy">Healthy</MenuItem>
                                            <MenuItem value="sick">Sick</MenuItem>
                                            <MenuItem value="disabled">Disabled</MenuItem>
                                        </Select>
                                        <FormHelperText>
                                            {formik.touched.health_status && formik.errors.health_status && (
                                                <Typography variant="body2" sx={{color: red[400]}}>
                                                    {formik.errors.health_status}
                                                </Typography>
                                            )}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <Typography variant="body2" sx={{mb: 1}}>
                                        Date of Birth
                                    </Typography>

                                    <DatePicker
                                        slotProps={{
                                            textField: {
                                                size: "medium",
                                                fullWidth: true
                                            }
                                        }}
                                        value={dob}
                                        onChange={handleDOBChange}
                                        disableFuture={true}
                                        label="Date of Birth"
                                    />
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <FormControl fullWidth={true}>
                                            <Typography variant="body2" sx={{mb: 1}}>
                                                Home Address
                                            </Typography>
                                            <OutlinedInput
                                                name="home_address"
                                                id="home_address"
                                                fullWidth={true}
                                                type="tel"
                                                placeholder="Enter your home address"
                                                value={formik.values.home_address}
                                                error={formik.touched.home_address && Boolean(formik.errors.home_address)}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.home_address && formik.errors.home_address && (
                                                <FormHelperText>
                                                    {formik.errors.home_address}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{mb: 2}}>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <Typography variant="body2" sx={{mb: 1}}>
                                        State
                                    </Typography>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <InputLabel id="gender">State</InputLabel>
                                        <Select
                                            name="state"
                                            onChange={formik.handleChange}
                                            size="medium"
                                            label="State"
                                            value={formik.values.state}
                                            variant="outlined">
                                            {WSF_DATA.US_STATES.map(state => {
                                                return (
                                                    <MenuItem key={state} value={state}>{state}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                        <FormHelperText>
                                            {formik.touched.state && formik.errors.state && (
                                                <Typography variant="body2" sx={{color: red[400]}}>
                                                    {formik.errors.state}
                                                </Typography>
                                            )}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <FormControl fullWidth={true}>
                                        <Typography variant="body2" sx={{mb: 1}}>
                                            Zip code
                                        </Typography>
                                        <OutlinedInput
                                            name="code"
                                            id="code"
                                            fullWidth={true}
                                            type="text"
                                            placeholder="Enter your code"
                                            value={formik.values.code}
                                            error={formik.touched.code && Boolean(formik.errors.code)}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.code && formik.errors.code && (
                                            <FormHelperText>
                                                {formik.errors.code}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography
                            sx={{
                                backgroundImage: "linear-gradient(to right, #af795d , #000000)",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                            variant="h3">
                            Receiving Information
                        </Typography>
                        <Divider variant="fullWidth" light={true} sx={{my: 4}}/>
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <FormControl fullWidth={true}>
                                        <Typography variant="body2" sx={{mb: 1}}>
                                            Requested amount
                                        </Typography>
                                        <OutlinedInput
                                            name="grant_amount"
                                            id="grant_amount"
                                            fullWidth={true}
                                            placeholder="Enter your desired amount"
                                            value={formik.values.grant_amount}
                                            error={formik.touched.grant_amount && Boolean(formik.errors.grant_amount)}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.grant_amount && formik.errors.grant_amount && (
                                            <FormHelperText>
                                                {formik.errors.grant_amount}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <FormControl fullWidth={true}>
                                            <Typography variant="body2" sx={{mb: 1}}>
                                                SSN
                                            </Typography>
                                            <OutlinedInput
                                                name="ssn"
                                                id="ssn"
                                                fullWidth={true}
                                                placeholder="Enter your ssn"
                                                value={formik.values.ssn}
                                                error={formik.touched.ssn && Boolean(formik.errors.ssn)}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.ssn && formik.errors.ssn && (
                                                <FormHelperText>
                                                    {formik.errors.ssn}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{mb: 1}}>
                                Grant Category
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <InputLabel id="grant_cateogry">Grant Category</InputLabel>
                                <Select
                                    name="grant_category"
                                    onChange={formik.handleChange}
                                    size="medium"
                                    label="Grant Category"
                                    value={formik.values.grant_category}
                                    variant="outlined">
                                    {WSF_DATA.GRANT_CATEGORIES.map(category => {
                                        return (
                                            <MenuItem key={category} value={category}>{category}</MenuItem>
                                        )
                                    })}
                                </Select>
                                <FormHelperText>
                                    {formik.touched.grant_category && formik.errors.grant_category && (
                                        <Typography variant="body2" sx={{color: red[400]}}>
                                            {formik.errors.grant_category}
                                        </Typography>
                                    )}
                                </FormHelperText>
                            </FormControl>
                        </Box>


                        <Box sx={{mb: 2}}>
                            <Grid container={true} spacing={4}>
                                <Grid item={true} xs={12} md={6}>
                                    <Stack
                                        direction="column"
                                        spacing={2}
                                        justifyContent="space-between"
                                        sx={{height: '100%'}}>
                                        {frontPreview ? (
                                            <Card
                                                sx={{display: 'flex', flexDirection: 'column',}}
                                                variant="outlined">
                                                <CardMedia
                                                    component="img"
                                                    sx={{objectFit: 'cover', objectPosition: 'center', flexGrow: 1}}
                                                    image={base64Front}/>
                                                <CardContent>
                                                    <Button
                                                        onClick={handleFrontRemoved}
                                                        color="secondary"
                                                        fullWidth={true}
                                                        endIcon={<Remove/>}
                                                        sx={{
                                                            textTransform: 'capitalize',
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                        }}
                                                        variant="outlined"
                                                        disableElevation={true}>
                                                        Remove Image
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        ) : (
                                            <label
                                                style={{
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    flex: 1,

                                                }}
                                                htmlFor="front-upload-image">
                                                <Input
                                                    onChange={handleFrontSelected}
                                                    sx={{display: 'none'}}
                                                    id="front-upload-image"
                                                    accept="image/*" type="file"/>
                                                <Card
                                                    sx={{
                                                        flex: 1,
                                                        borderWidth: 2,
                                                        borderStyle: 'dashed',

                                                    }}
                                                    variant="outlined">
                                                    <CardContent>
                                                        <CardMedia
                                                            component="img"
                                                            sx={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                                mb: 2,
                                                                height: '100%',
                                                                width: '100%'
                                                            }}
                                                            src={imageUpload}/>
                                                    </CardContent>
                                                </Card>
                                            </label>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Stack
                                        direction="column"
                                        spacing={2}
                                        justifyContent="space-between"
                                        sx={{height: '100%'}}>
                                        {backPreview ? (
                                            <Card
                                                sx={{display: 'flex', flexDirection: 'column',}}
                                                variant="outlined">
                                                <CardMedia
                                                    component="img"
                                                    sx={{objectFit: 'cover', objectPosition: 'center', flexGrow: 1}}
                                                    image={base64Back}/>
                                                <CardContent>
                                                    <Button
                                                        onClick={handleBackRemoved}
                                                        color="secondary"
                                                        fullWidth={true}
                                                        endIcon={<Remove/>}
                                                        sx={{
                                                            textTransform: 'capitalize',
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                        }}
                                                        variant="outlined"
                                                        disableElevation={true}>
                                                        Remove Image
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        ) : (
                                            <label
                                                style={{
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    flex: 1,

                                                }}
                                                htmlFor="upload-image">
                                                <Input
                                                    onChange={handleBackSelected}
                                                    sx={{display: 'none'}}
                                                    id="upload-image"
                                                    accept="image/*"
                                                    type="file"/>
                                                <Card
                                                    sx={{
                                                        flex: 1,
                                                        borderWidth: 2,
                                                        borderStyle: 'dashed',

                                                    }}
                                                    variant="outlined">
                                                    <CardContent>
                                                        <CardMedia
                                                            component="img"
                                                            sx={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                                mb: 2,
                                                                height: '100%',
                                                                width: '100%'
                                                            }}
                                                            src={imageUpload}/>
                                                    </CardContent>
                                                </Card>
                                            </label>
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>

                        <Stack direction="row" alignItems="center">
                            <Switch
                                value={agreed}
                                onChange={(event, checked) => setAgreed(checked)}
                                checked={agreed}
                                color="secondary"
                            />
                            <Typography
                                sx={{color: "text.primary"}}
                                variant="body2">
                                Confirm the form before Submitting and Stay Active online in the next 48hours for
                                further instruction.
                            </Typography>
                        </Stack>

                        <Grid container={true} justifyContent="flex-start">
                            <Grid item={true} xs={12} md="auto">
                                <Button
                                    type="submit"
                                    disableElevation={true}
                                    variant="contained"
                                    disabled={!agreed || loading}
                                    size="large"
                                    color="secondary"
                                    sx={{textTransform: "none"}}>
                                    {loading ? 'Applying...': 'Apply'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    )
}

export default GrantForm;
