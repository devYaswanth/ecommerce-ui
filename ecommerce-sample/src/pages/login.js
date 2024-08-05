import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [usercredentials, setUserCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setUserCredentials({ ...usercredentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(usercredentials));
        navigate('/')
    };

    return (
        <React.Fragment>
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                }}
            >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Grid item>
                        <Paper
                            sx={{
                                padding: 4,
                                borderRadius: 2,
                                boxShadow: 3,
                                width: '100%',
                                maxWidth: 400,
                            }}
                        >
                            <Typography variant="h5" component="h2" gutterBottom align="center">
                                Login
                            </Typography>
                            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Username"
                                            variant="outlined"
                                            name="username"
                                            value={usercredentials.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            name="password"
                                            value={usercredentials.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                        >
                                            Login
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}