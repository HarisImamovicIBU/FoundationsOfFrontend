import React, { useState } from 'react';
import {Card, CardContent, Grid, TextField, Button, Snackbar } from '@mui/material';
import Alert from '@mui/lab/Alert';

function Form() {
    const [formData, setFormData]=useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors]=useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false
    });
    const [snackbarOpen, setSnackbarOpen]=useState(false);

    const handleChange=(e)=>{
        const { name, value }=e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: false });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const errors = {
            firstName: !formData.firstName,
            lastName: !formData.lastName,
            email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
            message: !formData.message
            /*\S+ Checks for one or more non-whitespace characters.
               @ Checks for the "@" symbol.
              \S+ Checks for one or more non-whitespace characters.
              \. Checks for the dot "." symbol.
              \S+ Checks for one or more non-whitespace characters*/
    };

    if (Object.values(errors).some(error=>error)) {
            setFormErrors(errors);
        } else {
            setSnackbarOpen(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        }
    };
    const handleSnackbarClose=()=>{
        setSnackbarOpen(false);
    };

    return (
        <div className="form_container">
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={formErrors.firstName}
                                    helperText={formErrors.firstName && "First name is required"}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    error={formErrors.lastName}
                                    helperText={formErrors.lastName && "Last name is required"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={formErrors.email}
                                    helperText={formErrors.email && "Valid email is required"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Message"
                                    multiline
                                    rows={4}
                                    placeholder="Enter your message"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    error={formErrors.message}
                                    helperText={formErrors.message && "Message is required"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" style={{ backgroundColor: 'green', color: 'white',  width: '50%', margin: '0 auto', display: 'block' }} color="primary" type="submit" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    Form submitted successfully!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Form;