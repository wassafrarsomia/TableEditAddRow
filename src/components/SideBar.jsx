import React from 'react';
import {Wrapper} from '../CSS/SideBar.css';
import {sidebar} from '../CSS/SideBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    
  } from "react-router-dom";
  import Crudcontainer from './Crud-container'


export default function SideBar(props) {
    return (
        <Router>
        <div >
        
            <div className="wrapper" style={{...Wrapper}}>
            
                <div className="sidebar" style={sidebar}>
                     <img src="/téléchargement.jpg" style={{ borderRadius: "50%" , width:"100px", height:"100px",margin:"0px 50px 30px 50px"}}/>
                    <ul >
                        <li style={{padding:"15px", listStyle:"none"}}><a href="#"><i class="ace-icon fa fa-chart-pie">Dashboard</i></a></li>
                        <li style={{padding:"15px", listStyle:"none" }}><Link to="/Crudcontainer"><i class="ace-icon fa fa-user"></i> Assurés</Link></li>
                        <li style={{padding:"15px", listStyle:"none"}}><a href="#"><i class="ace-icon fa fa-folder"> Dossiers Soins</i></a></li>
                        <li style={{padding:"15px", listStyle:"none"}}><a href="#"><i class="ace-icon fa fa-file"> Prise en charge</i></a></li>
                        <li style={{padding:"15px", listStyle:"none"}}><a href="#"><i class="ace-icon fa fa-list"> Trop perçu</i></a></li>
                        <li style={{padding:"15px", listStyle:"none"}}><a href="#">Emissions  </a></li>
                        <li style={{padding:"15px", listStyle:"none"}}><a href="#">Appurement</a></li>

                    </ul>
                    <hr/>
                   
                </div>
                <div   style={{display:"flex"}}> 
                <Switch   >
                        <Route exact path="/Crudcontainer" component={Crudcontainer}/>
                </Switch> 
        </div>
                
            </div>
            
        </div>
        </Router>
    )
}
