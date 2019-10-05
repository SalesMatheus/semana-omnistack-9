import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }) {
    const [thunbnaill, setthunbnaill] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thunbnaill ? URL.createObjectURL(thunbnaill) : null;
    }, [thunbnaill])

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thunbnaill', thunbnaill);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers: { user_id: user_id }
        })

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="thunbnaill" style={{ backgroundImage: `url(${preview})` }} className={thunbnaill ? `has-thunbnaill` : ''}>
                <input type="file" onChange={event => setthunbnaill(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>


            <label htmlFor="company">EMPRESA *</label>
            <input id="company" value={company} onChange={event => setCompany(event.target.value)} placeholder="Digite o nome da sua empresa" />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
            <input id="techs" value={techs} onChange={event => setTechs(event.target.value)} placeholder="Quais tecnologias usam?" />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para gratuito)</span></label>
            <input id="price" value={price} onChange={event => setPrice(event.target.value)} placeholder="Valor cobrado por dia" />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}