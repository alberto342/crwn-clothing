import React from 'react';

import './costom-button.style.scss';

const CustomButton = ({children, ...otherProps}) => (

    <button className='custom-button' {...otherProps}>
        {children}
    </button>

);

export default CustomButton;