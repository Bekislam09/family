import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sabina.css'
import black from '../images/black.jpg'

const Sabina = () => {
    const navigate = useNavigate()
    return (
        <div id='lsister' >
            <img id='img-lsister' src={black} alt="" />
            <h1>Сабина</h1>
            <h2>Дата Рождения: 2018:04:21</h2>
            <h4>Описание:отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Sabina;
