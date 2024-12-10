import React from 'react';
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'
import './Grandfather.css'

const Grandfather = () => {

    const navigate = useNavigate();

    return (
        <div id='gfather' >
            <img id='img-gfather' src={black} alt="" />
            <h1>Абдылда</h1>
            <h2>Дата Рождения: 0000:00:00</h2>
            <h4>Описание отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Grandfather;
