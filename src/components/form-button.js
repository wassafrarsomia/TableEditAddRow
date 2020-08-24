import React, { useState} from 'react';

import {formButtonStyle, hoveredFormButtonStyle } from '../CSS/fomr-button.css';

export default function Button(props) {


    const [style, setStyle] = useState(formButtonStyle);

    function mouseOver() {
        setStyle(hoveredFormButtonStyle);
    }

    function mouseOut() {
        setStyle(formButtonStyle);
    }

    return (
        <button
            style={{...style, ...props.style}}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            > { props.children || "Envoyer" } </button>
    )
}