import React from 'react';
import './styles.css';

export const ContactPopup = ({ closePopup, formStatus, showPopup }) => (
    <div
        className={showPopup ? 'contact-popup-overlay' : 'contact-popup-overlay hidden no-opacity'}
    >
        <div className={showPopup ? 'contact-popup' : 'contact-popup hidden no-opacity'}>
            <i className="fas fa-times popup-close" onClick={closePopup} />
            <h1>{formStatus.header}</h1>
            <p>{formStatus.message}</p>
            <embed src="/images/earth-comm.svg" alt="earth" />
        </div>
    </div>
);
