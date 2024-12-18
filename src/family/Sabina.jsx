import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sabina.css'
import lbrother from '../images/ls1.jpg'

const Sabina = () => {
    const navigate = useNavigate()
    return (
        <div id='lsister' >
            <img style={{borderRadius: '15px', objectFit: 'cover'}} id='img-lsister' src={lbrother} alt="" />
            <h1 style={{fontSize: '40px'}} >Сабина</h1>
            <h2 style={{fontSize: '40px'}} >Дата Рождения: 2018:04:21</h2>
            <h1>Описание:отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Sabina;
