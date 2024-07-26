// src/ContactUs.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import './Contact.css';

const mapContainerStyle = {
    width: '100%',
    height: '280px',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send the message, please try again.');
            });

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <Header />
            <div className='form'>
                <span className='get'>Get In Touch</span>
                <div className='contact_form'>
                    <div className='contact'>
                        <span className='leave'>Leave us a message</span>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '10px' }}>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px' }} required />
                                </label>
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px' }} required />
                                </label>
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <label>
                                    Message:
                                    <textarea name="message" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px' }} rows="4" required></textarea>
                                </label>
                            </div>
                            <Button text='send' style={{ padding: '10px 20px', width: '385px' }} />
                        </form>
                    </div>
                    <div className='location'>
                        <span>aashishrawte1@gmail.com</span>
                        <span>+91-9617028649</span>
                        <div className='map'>
                            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                                    <Marker position={center} />
                                </GoogleMap>
                            </LoadScript>

                        </div>
                       
                    </div>
                </div>
            </div>
            
            <Footer />

        </div>

    );
};

