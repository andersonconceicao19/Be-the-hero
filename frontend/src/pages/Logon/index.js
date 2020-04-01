import React, {useState} from 'react';
import{ Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'
import './style.css';

import heroesimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';



export default function Logon(){
    const [id, setId] = useState("");
    const history = useHistory();
    async function handleLogin(event){
        event.preventDefault();        
        try{
            const response = await api.post('session', {id})
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('profile')

        }catch(err){
            console.log(err)
        }

    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be the hero" />
                <form onSubmit={handleLogin}>
                    <h1> Faça seu Logon</h1>

                    <input type="text" placeholder="Sua ID" 
                      value={id}
                      onChange={e=> setId(e.target.value)}
                    
                    />

                    <input className="button" type="submit" style={{marginTop:8 }}value="Entrar" />
                   
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho Acesso
                    </Link>
                </form>
            </section>
            <img src={heroesimg} alt="heroes" />
        </div>
    );
}