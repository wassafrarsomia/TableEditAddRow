import React from 'react';
import Crudheaderstyle from '../CSS/Crud-header.css' ;

export default function Crudheader(props) {

    /*
        myObject = {property1: "value", property2: "value"};

        objet2 = {...myObject, property3: "vale", property2: "another value"};
                <==>
        object2 = {property1: "value", property2: "another value", property3: "value"}
    */
    return (
        <div style={{...Crudheaderstyle, ...props.style} }>
            <h1>{props.title}</h1>
           
             
        </div>
    )
}
