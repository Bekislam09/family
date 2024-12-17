import black from '../images/black.jpg'
import './Bekislam.css'
import { useNavigate } from 'react-router-dom';

const Bekislam = () => {

    const navigate = useNavigate();

    return (
        <div id='bekislam' >
            <img id='img-bekislam' src={black} alt="" />
            <h1 style={{fontSize: '40px'}} >Бекислам</h1>
            <h2 style={{fontSize: '26px'}} >Дата Рождения: 2009:05:14</h2>
            <h1>Описание:отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Bekislam;
