import React from 'react';
import { Link } from 'react-router-dom'
import black from './images/black.jpg'
import gmother from './images/grandmother.jpg'
import './App.css'

const Home = () => {
    return (
        <div className='container' >
            <div className='Grandfather' >
                <Link to={'/Grandfather'} >
                <img className='img-grandfather' src={black} alt="" />
                </Link>
                <h1 className='gpn' >Абдылда</h1>
            </div> 

            <div className='grandmother' >
                <Link to={'/Grandmother'} >
                <img className='img-grandmother' src={gmother} alt="" />
                </Link>
                <h1 className='gmn' >Токжан</h1>
            </div>
        </div>
    );
}

export default Home;
