import  React, {useState} from  'react';
import logoimg from '../../assets/logo.svg'
import { Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

import './style.css';

export default function NewIncident(){
    const history = useHistory();
    const ongId = localStorage.getItem('ongId')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [values, setvalues] = useState('');

    const data = {
        title,
        description,
        values
    }

    async function handleNewincidentes(event){
        event.preventDefault();
        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            })
            history.push('/profile')
        }catch(error){
            console.log(error);
            
        }
    }

    return(
        <div className="new-incident-container">
        <div className="content">
            
            <section>
            <img src={logoimg} alt="Be the hero"/>
            <h1>Cadatrar novo caso</h1>
            <p>Faça seu cadastro, do incidente e blablabla!!</p>
            <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
               voltar
            </Link>            
            </section>
            <form onSubmit={handleNewincidentes}>
                <input type="text" placeholder="Titulo de caso" 
                    value={title}    
                    onChange={e => setTitle(e.target.value)}            
                />                
                <textarea type="text" placeholder="Descrição" 
                    value={description}    
                    onChange={e => setDescription(e.target.value)}  
                />   
                <input type="text" placeholder="valor em reais"
                    value={values}    
                    onChange={e => setvalues(e.target.value)}  
                />  
                <input className="button" type='submit' style={{marginTop:8}} value="Cadastrar" />
            </form>
        </div>
    </div>
    );
}