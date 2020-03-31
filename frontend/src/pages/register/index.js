import React from 'react';
import logoimg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './style.css';

export default function Register(){
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
                <form action="">
                    <input type="text" placeholder="Nome da Ong" />
                    <input type="email" placeholder="Email da Ong" />
                    <input type="text" placeholder="whatsapp" />
                    <div className="group-div">
                        <input  placeholder="Cidade" />
                        <input placeholder="UF" style={{width: 90}} />
                    </div>
                    <input className="button" type='submit' value="Cadastrar" />
                </form>
            </div>
        </div>
    );
}