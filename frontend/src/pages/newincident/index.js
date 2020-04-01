import  React from  'react';
import logoimg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import './style.css';

export default function NewIncident(){
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
            <form action="">

                <input type="text" placeholder="Titulo de caso" />                
                <textarea type="text" placeholder="Descrição" />   
                <input type="text" placeholder="valor em reais" />  

                <input className="button" type='submit' style={{marginTop:8}} value="Cadastrar" />
            </form>
        </div>
    </div>
    );
}