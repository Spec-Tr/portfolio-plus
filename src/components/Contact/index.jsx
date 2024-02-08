import React, { useState, useCallback } from 'react';
import './style.css';

const emailVal = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData, [name]: value
        }));

        // Clear the error
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    }, [errors]);

    const handleBlur = useCallback((e) => {
        const { name, value } = e.target;
        let error = '';

        if (!value.trim()) {
            error = `${name.charAt(0).toUpperCase() + name.slice(1)} required!`;
        } else if (name === 'email' && !emailVal(value)) {
            error = 'Email invalid!';
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!formData.name.trim()) validationErrors.name = 'Name required!';
        if (!formData.email.trim()) {
            validationErrors.email = 'Email required!';
        } else if (!emailVal(formData.email)) {
            validationErrors.email = 'Email invalid!';
        }
        if (!formData.message.trim()) validationErrors.message = 'Message required!';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            //Future form submission would/can go here
            setErrors({});
            // Reset form or handle successful form submission
            console.log('Form data submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className='contact-box'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor='name'>Name:</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && <span className='form-error'>{errors.name}</span>}

                <label htmlFor="email">Email:</label>
                <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && <span className='form-error'>{errors.email}</span>}

                <label className="labelTA" htmlFor="message">Message:</label>
                <textarea id='message' name='message' value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                {errors.message && <span className='form-error'>{errors.message}</span>}

                <button className="submit" type='submit'>Submit</button>
            </form>
        </div>
    );
}
