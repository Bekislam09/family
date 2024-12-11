import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'
import './Mother.css'

const Mother = () => {
    navigate = useNavigate();
    return (
        <div id='mother' >
            <img id='img-mother' src={black} alt="" />
            <h1>Батыргул</h1>
            <h2>Дата Рождения: 1984:08:24</h2>
            <h4>Описание:отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Mother;
