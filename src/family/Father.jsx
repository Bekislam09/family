import React from 'react';
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'
import './Father.css'
const Father = () => {

    const navigate = useNavigate();

    return (
        <div id='father'>
            <img id='img-father' src={black} alt="" />
            <h1 style={{fontSize: '40px'}} >Мурсалбек</h1>
            <h2 style={{fontSize: '26px'}} >Дата Рождения: 1982:05:19</h2>
            <h1>Описание:отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Father;
