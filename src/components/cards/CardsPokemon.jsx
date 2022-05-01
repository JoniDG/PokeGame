import React from 'react'
import useGetData from '../../hooks/useGetData'
import './CardsPokemon.css'

const CardsPokemon = ({urlItem}) => {
    const [data, loading, error] = useGetData(urlItem);
    
    return (
        <div className='container'>
            <li className='card-item'>
            {
                loading ? (
                    <h2>Cargando...</h2>
                ) : error ?(
                    <h3>Error: {error.message}</h3>
                ) : 
                <div className='card' style={{width:'14rem'}}>
                    <div className='card-header'>
                    <input type="checkbox"></input>
                        <h5 className='card-title'>{data.id}</h5>
                    </div>
                    <div className='card-body'>
                        <img src={data.sprites.other.dream_world.front_default} alt='pokemon' width="220" height="100"/>
                    </div>
                    <div className='card-footer'>
                        <p className='card-text'>{data.forms[0].name} </p>
                    </div>
                </div>
                
            }
            </li>
        </div>
    ) 
}

export default CardsPokemon;