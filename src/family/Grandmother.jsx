import React from 'react';
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'
import './Grandmother.css'

const Grandmother = () => {

    const navigate = useNavigate()

    return (
        <div id='gmother' >
            <img id='img-gmother' src={black} alt="" />            
            <h1>Токжан</h1>
            <h2>Дата Рождения: 0000:00:00</h2>
            <h4>Описание отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Grandmother;
