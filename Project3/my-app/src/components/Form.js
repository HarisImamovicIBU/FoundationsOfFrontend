import React from 'react';
import {Typography, Card, CardContent, Grid, TextField, Button} from '@material-ui/core';
function Form(){
    return(
        <div className="form_container">
            <Typography gutterBottom variant="h3" align="center">
            Form
            </Typography>
            <Card>
                <CardContent>
                    <form>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField label="First Name" placeholder="Enter your first name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label="Last Name" placeholder="Enter your last name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Message" multiline rows={4} placeholder="Enter your message" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <Button variant="contained" color="primary" fullwidth>Submit</Button>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
export default Form;