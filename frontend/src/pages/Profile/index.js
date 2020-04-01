import React, { useState, useEffect} from   'react';
import logoimg from '../../assets/logo.svg';
import { Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi'
import api from '../../services/api'
import './style.css'

export default function Profile(){
    const history = useHistory();
    const [incidents, setincidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(()=>{
            api.get('profile', {
                headers: {
                    Authorization: ongId,
                }
            }).then(response => {
                setincidents(response.data)
            })
    },[ongId]);

    async function handleDeleteincident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            setincidents(incidents.filter(incident => incident.id !== id))
        } catch(err){
            alert('Tente outra vez...')
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    return(
      <div className="profile-container">
         <header>
            <img src={logoimg} alt="Be the hero" />
            <span>Bem-vinda, {ongName}</span>
            <Link className="button" to="/incidents/news">
                Cadastrar novo caso
            </Link>
            <button onClick={handleLogout}>
                <FiPower size={18} color="red" />
            </button>
         </header>

         <h1>Casos cadastrados</h1>
         <ul>            
             {incidents.map(incident => (
            <li key={incident.id}>
                 <strong>CASO:</strong>
                 <p>{incident.title}</p>
                 <strong>DESCRICAO:</strong>
                 <p>{incident.description}</p>
                 <strong>VALOR</strong>
                 <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.values)}</p>
                 <button onClick={()=> handleDeleteincident(incident.id)} type="button">
                     <FiTrash2 size={20} color= "#a8a8d" />
                 </button>
             </li>
             ))}
         </ul>
      </div>
    );
}