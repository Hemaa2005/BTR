import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center p-4">
            <div className="w-full max-w-6xl aspect-video">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.796365846095!2d77.35181627402619!3d11.422321246950162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba91951ed30a831%3A0x4bb64311d9272fdc!2sBTR%20SUPER%20MAARKET!5e0!3m2!1sen!2sin!4v1745725096177!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact;
