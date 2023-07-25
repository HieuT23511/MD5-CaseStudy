import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Link, useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {useState} from "react";
import {Alert} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {'FE2DIE-'}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();
const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
let listAccount = [{
    email: "admin@gmail.com",
    password: "1234",
    role:"admin"
}, {
    email: "user@gmail.com",
    password: "1234",
    role:"user"
}]

export default function SignIn() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({})
    const [isLogin, setIsLogin] = useState(false)
    const [message,setMessage] = useState("")
    const formLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
            role:""
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            setAccount(values)
            let checkAccount = listAccount.find(item=> item.email === account.email && item.password === account.password)
            console.log(checkAccount)
            if(checkAccount){
                setIsLogin(true)
                if(checkAccount.role === "admin"){
                    navigate('/admin')
                }
                else if(checkAccount.role === "user") {
                    navigate('/')
                }
            }else {
                setIsLogin(false)
                setMessage("Tài khoản mật khẩu không đúng")
            }
        }
    })

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Typography>
                        {message}
                    </Typography>
                    <Box component="form" onSubmit={formLogin.handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={formLogin.handleChange}
                            value={formLogin.values.email}
                            error={formLogin.errors.email && formLogin.touched.email}
                            helperText={formLogin.errors.email && formLogin.touched.email ? formLogin.errors.email : null}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={formLogin.handleChange}
                            value={formLogin.values.password}
                            error={formLogin.errors.password && formLogin.touched.password}
                            helperText={formLogin.errors.password && formLogin.touched.password ? formLogin.errors.password : null}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <div><Link to={"/register"}> {"Don't have an account? Sign Up"} </Link></div>
                            </Grid>
                            <Grid item>
                                <div><Link to={"/"}> {"Back to Home"} </Link></div>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}