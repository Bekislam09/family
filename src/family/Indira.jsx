import React from 'react';
import black from '../images/black.jpg';
import { useNavigate } from 'react-router-dom';
import './Indira.css'

const Indira = () => {

    const navigate = useNavigate();

    return (
        <div id='indira' >
            <img id='img-indira' src={black} alt="" />
            <h1>Индира</h1>
            <h2>Дата Рождения: 2007:12:03</h2>
            <h4>Описание:отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Indira;
