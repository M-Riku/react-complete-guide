import React from 'react';

import './Char.css'

const charComponent = (probs) => {

    return (
        <p className="char" onClick={probs.click}>{probs.value}</p>
    );
};

export default charComponent;