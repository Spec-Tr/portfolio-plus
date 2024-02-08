import React, { useState, useCallback } from 'react'
import './style.css'

const emailVal = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData, [name]: value
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = {}
        if (!formData.name.trim()) validationError.name = 'Name is required!';
        if (!formData.email.trim()) {
            validationError.email = 'Email is required!';
        } else if (!emailVal(formData.email)) {
            validationError.email = 'Email is invalid!'
        }
        if (!formData.message.trim()) validationError.message = 'Message is required!';

        if (Object.keys(validationError).length > 0) {
            setErrors(validationError);
        } else {
            setErrors({});
        }
    }

    return (
        <div className='contact-box'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor='name'>Name:</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange}/>
                {errors.name && <span className='form-error'>{errors.name}</span>}

                <label htmlFor="email">Email:</label>
                <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} />
                {errors.email && <span className='form-error'>{errors.email}</span>}

                <label htmlFor="message">Message:</label>
                <textarea id='message' name='message' value={formData.message} onChange={handleChange} />
                {errors.message && <span className='form-error'>{errors.message}</span>}

                <button className="submit" type='submit'>Submit</button>
            </form>
        </div>
    )
}
