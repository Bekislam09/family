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
                    <h6>Абдылда</h6>
                </div> 

                <div className='grandmother' >
                    <Link to={'/Grandmother'} >
                    <img className='img-grandmother' src={black} alt="" />
                    </Link>
                    <h6>Токжан</h6>
                </div>

                <div className='father' >
                    <Link to={'/Father'}>
                    <img className='img-father' src={black} alt=""/>
                    </Link>
                    <h6>Мурсалбек</h6>
                </div>

                <div className='mother' >
                    <Link to={'/Mother'} >
                    <img className='img-mother' src={black} alt="" />
                    </Link>
                    <h6>Батыргул</h6>
                </div>
            </div>
        </div>
    );
}

export default Home;
