import React from 'react';
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'
import './Father.css'
const Father = () => {
    const navigate = useNavigate();
    return (
        <div id='mother' >
            <img id='img-father' src={black} alt="" />
            <h1>Мурсалбек</h1>
            <h2>Дата Рождения: 1982:05:19</h2>
            <h4>Описание:отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Father;
