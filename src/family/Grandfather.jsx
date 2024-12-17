import React from 'react';
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'
import './Grandfather.css'

const Grandfather = () => {

    const navigate = useNavigate();

    return (
        <div id='gfather' >
            <img id='img-gfather' src={black} alt="" />
            <h1 style={{fontSize: '40px'}} >Абдылда</h1>
            <h2 style={{fontSize: '26px'}} >Дата Рождения: 1960:03:19</h2>
            <h1>Описание отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Grandfather;
