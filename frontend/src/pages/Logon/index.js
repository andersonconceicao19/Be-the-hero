import React from 'react';
import{ Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './style.css';

import heroesimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be the hero" />
                <form action="">
                    <h1> Faça seu Logon</h1>

                    <input type="text" placeholder="Sua ID" />

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