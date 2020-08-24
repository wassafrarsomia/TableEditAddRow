import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import {formContainerStyle, smallFormContainerStyle} from '../CSS/form-container.css';

import FormHeader from './form-header';
import FormButton from './form-button';

export default function FormContainer(props) {
    let history = useHistory();

    function handleClick() {
      history.push("/home");
    }
  

    const [style, setStyle] = useState(formContainerStyle);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 475) {
                setStyle(smallFormContainerStyle);
            } else {
                setStyle(formContainerStyle);
            }
        })
    })

    return (<div style={{...style, ...props.style}}>
        <FormHeader title={props.title} icon={props.icon} />
        <form onSubmit={props.onSubmit}>
            {props.children}
            <div style={{textAlign: "right"}}>
                <FormButton ></FormButton>
            </div>
        </form>
    </div>
    )
}