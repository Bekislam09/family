import React from 'react';
import black from '../images/black.jpg';
import { useNavigate } from 'react-router-dom';
import './Indira.css'

const Indira = () => {

    const navigate = useNavigate();

    return (
        <div id='indira' >
            <img id='img-indira' src={black} alt="" />
            <h1 style={{fontSize: '40px'}} >Индира</h1>
            <h2 style={{fontSize: '26px'}} >Дата Рождения: 2007:12:03</h2>
            <h1>Описание:отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Indira;
