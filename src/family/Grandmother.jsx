import React from 'react';
import { useNavigate } from 'react-router-dom';
import gmother from '../images/grandmother.jpg'
import './Grandmother.css'

const Grandmother = () => {

    const navigate = useNavigate()

    return (
        <div id='gmother' >
            <img style={{borderRadius: '15px', objectFit: 'cover'}} id='img-gmother' src={gmother} alt="" />            
            <h1 style={{fontSize: '40px'}} >Токжан</h1>
            <h2 style={{fontSize: '26px'}} >Дата Рождения: 1963:09:19</h2>
            <h1>Описание отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Grandmother;
