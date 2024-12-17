import React from 'react';
import { Link } from 'react-router-dom'
import black from './images/black.jpg'
// import gmother from './images/grandmother.jpg'
import './App.css'

const Home = () => {
    return (
        <div className='container' >
            <h2>Добро Пожаловать в Мою Семью!</h2>
            <div className='cards' >
                <div className='Grandfather' >
                    <Link to={'/Grandfather'} >
                    <img className='img-grandfather' src={black} alt="" />
                    </Link>
                    <h4 className='z' >Абдылда</h4>
                </div> 

                <div className='grandmother' >
                    <Link to={'/Grandmother'} >
                    <img className='img-grandmother' src={black} alt="" />
                    </Link>
                    <h4 className='x' >Токжан</h4>
                </div>

                <div className='father' >
                    <Link to={'/Father'}>
                    <img className='img-father' src={black} alt=""/>
                    </Link>
                    <h4 className='z' >Мурсалбек</h4>
                </div>

                <div className='mother' >
                    <Link to={'/Mother'} >
                    <img className='img-mother' src={black} alt="" />
                    </Link>
                    <h4 className='x' >Батыргул</h4>
                </div>
                <div className='bekislam'>
                    <Link to={'/Bekislam'}>
                    <img className='img-bekislam'  src={black} alt=""/>
                    </Link>
                    <h4 className='z' >Бекислам</h4>
                </div>
                <div className='indira' >
                    <Link to={'/Indira'} >
                    <img className='img-indira' src={black} alt="" />
                    </Link>
                    <h4 className='x' >Индира</h4>
                </div>

                <div className='bayastan' >
                    <Link to={'/Bayastan'} >
                    <img className='img-bayastan' src={black} alt="" />
                    </Link>
                    <h4 className='z' >Баястан</h4>
                </div>
                <div className='sabina' >
                    <Link to={'/Sabina'} >
                    <img className='img-sabina' src={black} alt="" />
                    </Link>
                    <h4 className='x' >Сабина</h4>
                </div>
            </div>
        </div>
    );
}

export default Home;
