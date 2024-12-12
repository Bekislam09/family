import black from '../images/black.jpg'
import './Bekislam.css'
import { useNavigate } from 'react-router-dom';

const Bekislam = () => {

    const navigate = useNavigate();

    return (
        <div id='bekislam' >
            <img id='img-bekislam' src={black} alt="" />
            <h1>Бекислам</h1>
            <h2>Дата Рождения: 2009:05:14</h2>
            <h4>Описание:отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Bekislam;
