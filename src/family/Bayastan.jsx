import './Bayastan.css'
import { useNavigate } from 'react-router-dom';
import lbrother from '../images/lb1.jpg'

const Bayastan = () => {
    const navigate = useNavigate()
    return (
        <div id='lbrother' >
            <img style={{borderRadius: '15px'}} id='img-lbrother' src={lbrother} alt="" />
            <h1 style={{fontSize: '40px'}} >Баястан</h1>
            <h1 style={{fontSize: '26px'}} >Дата Рождения: 2012:02:20</h1>
            <h1>Описание:отсутсвует</h1>
            <button id='btn' onClick={() =>{
                navigate(-1)
            }}>Назад</button>
        </div>
    );
}

export default Bayastan;
