import React from   'react';
import logoimg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi'
import './style.css'

export default function Profile(){
    return(
      <div className="profile-container">
         <header>
         <img src={logoimg} alt="" />
          <span>Bem-vinda, </span>
          <Link className="button" to="/incidents/news">
              Cadastrar novo caso
          </Link>
          <button>
          <FiPower size={18} color="red" />
          </button>
         </header>

         <h1>Casos cadastrados</h1>
         <ul>
             <li>
                 <strong>CASO:</strong>
                 <p>CDescrição teste</p>
                 <strong>DESCRICAO:</strong>
                 <p>Descrição teste</p>
                 <strong>VALOR</strong>
                 <p>R$ 130</p>
                 <button type="button">
                     <FiTrash2 size={20} color= "#a8a8d" />
                 </button>
             </li>
             <li>
                 <strong>CASO:</strong>
                 <p>CDescrição teste</p>
                 <strong>DESCRICAO:</strong>
                 <p>Descrição teste</p>
                 <strong>VALOR</strong>
                 <p>R$ 130</p>
                 <button type="button">
                     <FiTrash2 size={20} color= "#a8a8d" />
                 </button>
             </li>
             <li>
                 <strong>CASO:</strong>
                 <p>CDescrição teste</p>
                 <strong>DESCRICAO:</strong>
                 <p>Descrição teste</p>
                 <strong>VALOR</strong>
                 <p>R$ 130</p>
                 <button type="button">
                     <FiTrash2 size={20} color= "#a8a8d" />
                 </button>
             </li>
             <li>
                 <strong>CASO:</strong>
                 <p>CDescrição teste</p>
                 <strong>DESCRICAO:</strong>
                 <p>Descrição teste</p>
                 <strong>VALOR</strong>
                 <p>R$ 130</p>
                 <button type="button">
                     <FiTrash2 size={20} color= "#a8a8d" />
                 </button>
             </li>
         </ul>
      </div>
    );
}