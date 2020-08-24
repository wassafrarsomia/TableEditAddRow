import React , {useState} from 'react';
import {thead} from '../CSS/Table.css';



 

export default function Table(props) {
   /* const itemButtons = function () {
        const that = this;
        return <div><button onClick={() => {}} >Modifier</button>
         | <button onClick={function () {DeleteItem(that.id)}}>Supprimer</button></div>
    };*/

    const rows = [
        {
            id : 1,
            form: false,
            prestation: 'Porsche',
            nbr: 2,
            montantE: 'Blue',
            montantP: 'Blue',
            // buttons:  <div><button >Edit</button> | <button onClick={()=>DeleteItem(this.id)}>Delete</button></div>
            buttons: function (props) {
                return <div><button onClick={props.modifier} >Modifier</button>
                 | <button onClick={props.supprimer}>Supprimer</button></div>
            }
        },
        {
            id : 2,
            form: false,
            prestation: 'sss',
            nbr: 2,
            montantE: 'Blue',
            montantP: 'Blue',
            // buttons:  <div><button >Edit</button> | <button onClick={()=>DeleteItem(this.id)}>Delete</button></div>
            buttons: function (props) {
                return <div><button onClick={props.modifier} >Modifier</button>
                 | <button onClick={props.supprimer}>Supprimer</button></div>
            }
        },
        {
            id : 3 ,
            form: false,
            prestation: 'Porsddddche',
            nbr: 2,
            montantE: 'Blue',
            montantP: 'Blue',
            // buttons:  <div><button >Edit</button> | <button onClick={()=>DeleteItem(this.id)}>Delete</button></div>
            buttons: function (props) {
                return <div><button onClick={props.modifier} >Modifier</button>
                 | <button onClick={props.supprimer}>Supprimer</button></div>
            }
        }
     ];
     const [items, setItems]=useState(rows);

     const [prestationInput, setPrestationInput] = useState();
     const [nbrInput, setNbrInput] = useState();
     const [montantEInput, setMontantEInput] = useState();
     const [montantPInput, setMontantPInput] = useState();
    
     const DeleteItem = (id)=>{
         console.log(id)
         var newTabl = items.filter(elem => elem.id !== id)
         setItems(newTabl);
     }
     const addNewItem = () => {
        const newRows = [...items];
        const row = {
            id: Math.floor(Math.random() * 1000),
            form: true,
            prestation: <input
                            placeholder="prestation"
                            value={prestationInput}
                            onChange={(e) => {console.log("on change khdam"); setPrestationInput(e.target.value)}}/>,
            nbr: <input
                            placeholder="Nombre "
                            value={nbrInput}
                            onChange={(e) => {setNbrInput(e.target.value)}}/>,
            montantE: <input
                            placeholder="Montant echange "
                            value={montantEInput}
                            onChange={(e) => {setMontantEInput(e.target.value)}}/>,
            montantP: <input
                            placeholder="Montant paye"
                            type="text"
                            value={montantPInput}
                            onChange={(e)=>setMontantPInput(e.target.value)}
                            />,
            buttons: function (props) {
                return <div><button onClick={props.modifier} >Ajouter</button> | <button onClick={props.supprimer}>Annuler</button></div>
            }
        };

        newRows.push(row);
        setItems(newRows);
      };

    function ajouter(formId) {
        const row = {
            id: Math.floor(Math.random() * 1000),
            form: false,
            prestation: prestationInput,
            nbr: nbrInput,
            montantE: montantEInput,
            montantPInput: montantPInput,
            buttons: function (props) {
                return <div><button onClick={props.modifier} >Modifier</button>
                 | <button onClick={props.supprimer}>Supprimer</button></div>
            }
        };

        DeleteItem(formId);

        const newRows = [...items];

        newRows.push(row);

        setItems(newRows);
    }

    return (
        <div> 
             <button  onClick={()=>addNewItem()} >+</button>
          
            <table className="table table-hover mt-4"  style={thead}>
                  <thead >
                        <tr className="table-light">
                            <th>Prestation</th>
                            <th>Nbr Actes</th>
                            <th>Montant engagé</th>
                            <th>Montant à paye</th>
                            <th></th>
                        </tr>
                  </thead>


                  <tbody id="list">
                    {items.map((row,index)=>
                    <tr key={index}>
                    <td>{row.prestation}</td>
                    <td>{row.nbr}</td>
                    <td>{row.montantE}</td>
                    <td>{row.montantP}</td>
                    <td>
                      <row.buttons modifier={row.form? () => {ajouter(row.id)}: () => {}} supprimer={function () {DeleteItem(row.id)}} />
                    </td>
                </tr>
                 
                )}
               
                  </tbody>
              </table>
              
              
            
        </div>
    )
}
