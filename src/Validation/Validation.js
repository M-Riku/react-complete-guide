import React from 'react';

const validationComponent = (probs) => {
    const inputTextLength = probs.inputText.length;

    let output = null;

    if (inputTextLength < 5) {
        output = (
            <p>Text too short</p>
        );
    } else {
        output = (
            <p>Text long enough</p>
        );
    }

    return output;
};

export default validationComponent;