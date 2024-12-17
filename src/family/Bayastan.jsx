import './Bayastan.css'
import { useNavigate } from 'react-router-dom';
import black from '../images/black.jpg'

const Bayastan = () => {
    const navigate = useNavigate()
    return (
        <div id='lbrother' >
            <img id='img-lbrother' src={black} alt="" />
            <h1>Баястан</h1>
            <h2>Дата Рождения: 2012:02:20</h2>
            <h4>Описание:отсутсвует</h4>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Bayastan;
