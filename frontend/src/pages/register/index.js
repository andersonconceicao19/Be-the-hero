import React, { useState} from 'react';
import logoimg from '../../assets/logo.svg';
import { Link , useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './style.css';

export default function Register(){
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [whatsapp, setwhatsapp] = useState("");
    const [city, setCidade] = useState("");
    const [uf, setuf] = useState("");
    const History = useHistory();
    async function handleRegister(event){
        event.preventDefault();
        const data = {
            name,
            email, 
            whatsapp, 
            city, 
            uf
        }
        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`)
            History.push('/')
        }
        catch(err){
            alert('tente novamente')
        }
        

    }
    return(
        <div className="register-container">
            <div className="content">
                
                <section>
                <img src={logoimg} alt="Be the hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, junte-se a nós e contribua para um mundo melhor!!</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                   voltar
                </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text"
                        placeholder="Nome da ong"
                        value={name} 
                        onChange={e=> setname(e.target.value)}  
                    />
                    <input type="email" 
                        placeholder="Email da Ong" 
                        value={email}
                        onChange={e=> setemail(e.target.value)}
                    />
                    <input type="text" 
                        placeholder="whatsapp" 
                        value={whatsapp} 
                        onChange={e=> setwhatsapp(e.target.value)}                   
                    
                    />
                    <div className="group-div">
                        <input 
                            placeholder="Cidade" 
                            value ={city}
                            onChange={e=> setCidade(e.target.value)}
                        />
                        <input placeholder="UF" style={{width: 90}} 
                            value ={uf}
                            onChange={e=> setuf(e.target.value)}
                        />
                    </div>
                    <input className="button" type='submit' value="Cadastrar" />
                </form>
            </div>
        </div>
    );
}