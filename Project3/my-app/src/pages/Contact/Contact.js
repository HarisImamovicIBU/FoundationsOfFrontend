import React from 'react';
import Form from '../../components/Form';
import styles from './ContactStyles.module.css';
function Contact() {
    return (
        <div className={styles.contact_container}>
            <Form />
        </div>
    );
}

export default Contact;
