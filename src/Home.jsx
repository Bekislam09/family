import React from 'react';
import { Link } from 'react-router-dom'
import black from './images/black.jpg'
// import gmother from './images/grandmother.jpg'
import './App.css'

const Home = () => {
    return (
        <div className='container' >
            <div className='cards' >
                <div className='Grandfather' >
                    <Link to={'/Grandfather'} >
                    <img className='img-grandfather' src={black} alt="" />
                    </Link>
                    <h4>Абдылда</h4>
                </div> 

                <div className='grandmother' >
                    <Link to={'/Grandmother'} >
                    <img className='img-grandmother' src={black} alt="" />
                    </Link>
                    <h4>Токжан</h4>
                </div>

                <div className='father' >
                    <Link to={'/Father'}>
                    <img className='img-father' src={black} alt=""/>
                    </Link>
                    <h4>Мурсалбек</h4>
                </div>

                <div className='mother' >
                    <Link to={'/Mother'} >
                    <img className='img-mother' src={black} alt="" />
                    </Link>
                    <h4>Батыргул</h4>
                </div>
                <div className='bekislam'>
                    <Link to={'/Bekislam'}>
                    <img className='img-bekislam'  src={black} alt=""/>
                    </Link>
                    <h4>Бекислам</h4>
                </div>
                <div className='indira' >
                    <Link to={'/Indira'} >
                    <img className='img-indira' src={black} alt="" />
                    </Link>
                    <h4>Индира</h4>
                </div>
            </div>
        </div>
    );
}

export default Home;
