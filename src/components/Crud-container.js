import React from 'react';
import Crudheader from './Crud-header';
import FormButton from './form-button';
import Table from './Table'

export default function Crudcontainer(props) {
    return (
        
        <div> 
            
            <Crudheader style={{marginBottom:"100px"}} title="Liste des prestations"  />
         
            <FormButton style={{marginLeft:"220px"}}   >Ajouter prestation </FormButton>
               
            <Table/>
        </div>
            
         
    )
}



