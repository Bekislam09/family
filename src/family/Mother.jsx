import React from 'react';
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'
import './Mother.css'

const Mother = () => {
    const navigate = useNavigate();

    return (
        <div id='mother' >
            <img id='img-mother' src={black} alt="" />
            <h1 style={{fontSize: '40px'}} >Батыргул</h1>
            <h2 style={{fontSize: '26px'}} >Дата Рождения: 1984:08:24</h2>
            <h1>Описание:отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Mother;
