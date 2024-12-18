import React from 'react';
import { Link } from 'react-router-dom'
import black from './images/black.jpg'
import gmother from './images/grandmother.jpg'
import './App.css'
import father from './images/father-img/f1.jpg'
import sister from './images/s1.jpg'
import lsister from './images/ls1.jpg'
import lbrother from './images/lb1.jpg'
import gfather from './images/gf1.jpg'

const Home = () => {
    return (
        <div className='container' >
            <h2>Добро Пожаловать в Мою Семью!</h2>
            <div className='cards' >
                <div className='Grandfather' >
                    <Link to={'/Grandfather'} >
                    <img style={{borderRadius: '15px'}} className='img-grandfather' src={gfather} alt="" />
                    </Link>
                    <h3   className='z' >Абдылда</h3  >
                </div> 

                <div className='grandmother' >
                    <Link to={'/Grandmother'} >
                    <img style={{borderRadius: '15px'}} className='img-grandmother' src={gmother} alt="" />
                    </Link>
                    <h3 style={{ marginLeft: '14px' }} >Токжан</h3  >
                </div>

                <div className='father' >
                    <Link to={'/Father'}>
                    <img style={{borderRadius: '15px'}} className='img-father' src={father} alt=""/>
                    </Link>
                    <h3 style={{marginLeft: '10px'}}>Мурсалбек</h3  >
                </div>

                <div className='mother' >
                    <Link to={'/Mother'} >
                    <img style={{borderRadius: '15px'}} className='img-mother' src={black} alt="" />
                    </Link>
                    <h3 className='x' >Батыргул</h3  >
                </div>
                <div className='bekislam'>
                    <Link to={'/Bekislam'}>
                    <img style={{borderRadius: '15px'}} className='img-bekislam'  src={black} alt=""/>
                    </Link>
                    <h3 style={{marginLeft: '13px'}} >Бекислам</h3  >
                </div>
                <div className='indira' >
                    <Link to={'/Indira'} >
                    <img style={{borderRadius: '15px'}} className='img-indira' src={sister} alt="" />
                    </Link>
                    <h3   className='x' >Индира</h3  >
                </div>

                <div className='bayastan' >
                    <Link to={'/Bayastan'} >
                    <img style={{borderRadius: '15px'}} className='img-bayastan' src={lbrother} alt="" />
                    </Link>
                    <h3 style={{marginLeft: '8px'}} >Баястан</h3  >
                </div>
                <div className='sabina' >
                    <Link to={'/Sabina'} >
                    <img style={{borderRadius: '15px'}} className='img-sabina' src={lsister} alt="" />
                    </Link>
                    <h3   className='x' >Сабина</h3  >
                </div>
            </div>
        </div>
    );
}

export default Home;
