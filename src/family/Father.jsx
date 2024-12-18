import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Father.css'
import f1 from '../images/father-img/f1.jpg'
import f2 from '../images/father-img/f2.jpg'
import f3 from '../images/father-img/f3.jpg'
import f4 from '../images/father-img/f4.jpg'
import f5 from '../images/father-img/f5.jpg'
import f6 from '../images/father-img/f6.jpg'
import f7 from '../images/father-img/f7.jpg'
import f8 from '../images/father-img/f8.jpg'
import f9 from '../images/father-img/f9.jpg'
import f10 from '../images/father-img/f10.jpg'
import f11 from '../images/father-img/f11.jpg'
import f12 from '../images/father-img/f12.jpg'


const Father = () => {

    const navigate = useNavigate();

    return (
        <div id='father'>
            <img style={{borderRadius: '15px'}} id='img-father' src={f1} alt=""/>
            <h1 style={{fontSize: '40px'}} >Мурсалбек</h1>
            <h2 style={{fontSize: '26px'}} >Дата Рождения: 1982:05:19</h2>
            <h1>Описание:отсутсвует</h1>
            <button onClick={() =>{
                navigate(-1)
            }}>Назад</button>
            <h1 style={{ fontSize: '24px' }} >Галерея</h1>
            <div>
                <img className='img' src={f1} alt="" />
                <img className='img' src={f2} alt="" />
                <img className='img' src={f3} alt="" />
                <img className='img' src={f4} alt="" />
                <img className='img' src={f5} alt="" />
                <img className='img' src={f6} alt="" />
                <img className='img' src={f7} alt="" />
                <img className='img' src={f8} alt="" />
                <img className='img' src={f9} alt="" />
                <img className='img' src={f10} alt="" />
                <img className='img' src={f11} alt="" />
                <img className='img' src={f12} alt="" />
            </div> 
        </div>
    );
}

export default Father;
