import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Form from '../../components/Form';
import styles from './ContactStyles.module.css';
const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});
function Contact() {
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.contact_container}>
                <h2 className={styles.title}>Contact me</h2>
                <Form />
            </div>
        </ThemeProvider>
    );
}
export default Contact;