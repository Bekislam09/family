import React from 'react';
import { useNavigate } from 'react-router-dom';
import gfather from '../images/gf1.jpg'
import './Grandfather.css'

const Grandfather = () => {

    const navigate = useNavigate();

    return (
        <div id='gfather' >
            <img style={{borderRadius: '15px', objectFit: 'cover'}} id='img-gfather' src={gfather} alt="" />
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
