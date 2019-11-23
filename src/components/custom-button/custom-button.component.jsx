import React from 'react';

import './costom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
            } custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;