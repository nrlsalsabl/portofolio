import React, { useState } from 'react';

import emailjs from 'emailjs-com';

import { PROFILE_DATA } from "../utils/data";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

const Contact =() => {
        const [formData, setFormData] = useState({
            fullname: '',
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
    
            emailjs.send('service_sal5a31', 'template_6lwrw9r', {
                fullname: formData.fullname, 
                email: formData.email,       
                message: formData.message    
            }, 'lOcUz22TVZIrDliod')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Pesan berhasil terkirim!');  
                setFormData({ fullname: '', email: '', message: '' });  
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Terjadi kesalahan, silakan coba lagi.');  
            });
        };

    return (
        <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
            <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">Contact</h5>
        
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
            <div>
                <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />
                <ContactInfoCard icon={<IoPhonePortraitOutline />} text={PROFILE_DATA.phone} />
                <ContactInfoCard icon={<MdOutlineWeb />} text={PROFILE_DATA.website} />
            </div>

            <div>
                <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">Contact Form</h5>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input type="text"
                    name="fullname"
                    placeholder="Full Name"
                    id=""
                    className="input-box"
                    autoComplete="off"
                    value={formData.fullname}
                        onChange={handleChange}
                        required
                    />

                    <input type="email"
                    name="email"
                    placeholder="Email"
                    id=""
                    className="input-box"
                    autoComplete="off"
                    value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                    name="message"
                    placeholder="Message"
                    id=""
                    rows="3"
                    className="input-box"
                    autoComplete="off"
                    value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button className="primary-btn" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
        </section>
    );
};

const ContactInfoCard = ({icon, text}) => {
    return (
        <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5">
            <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700">{icon}</div>

            <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
        </div>
    );
};

export default Contact