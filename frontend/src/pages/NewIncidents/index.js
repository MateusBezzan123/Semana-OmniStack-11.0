import React, { useState }from 'react';

import './style.css';
import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

export default function NewIncidents() {
    const [title,setTitle] = useState('');
    const [description,setdescription] = useState('');
    const [value,setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewInicent(e){
        e.preventDefault();
        const data = ({
            title,
            description,
            value,
        });
        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        }catch(err){
            alert('Erro no cadastro,tente novamente')
        }
    }
    return (
    <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={ logoImg } alt= " Be the Hereo"/>
            <h1>Cadastrar Novo Caso</h1>
            <p>
                Descreva o detalhamento para encontrar um herói para resolver isso.
            </p>
            
                <Link className= " back-link " to= "/profile">
                    <FiArrowLeft size= { 16 } color= "#E02041" />
                        Voltar para página anterior
                </Link>
        </section>
        <form onSubmit= { handleNewInicent }>
            <input placeholder="Titulo do Caso" 
            value = { title } 
            onChange= { e =>setTitle(e.target.value) }/>
            
            <textarea placeholder="Descrição"
            value = { description } 
            onChange= { e =>setdescription(e.target.value) } />
            
            <input placeholder="Valor em Reais" 
            value = { value } 
            onChange= { e =>setValue(e.target.value) } />

            <button className="button" type="submit"> Cadastrar </button>
        </form>
    </div>
</div>);
}