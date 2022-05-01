import React, {useContext} from 'react'
import CardsPokemon from '../../components/cards/CardsPokemon';
import { quantityToShow } from '../../consts/variousConstants';
import { PokeGameContext } from '../../contexts/PokeGame.Context';
import { useFilter } from '../../hooks/useFilter';
import { usePaginate } from '../../hooks/usePaginate';
import './Home.css'

export const Home = () => {
    const {pokes} = useContext(PokeGameContext);

    const [filtered,handleSearch] = useFilter(pokes,"name");

    const [currentItems, currentPage, nextPage, prevPage] = usePaginate(
        filtered ? filtered : pokes , quantityToShow
    );
  return (
    <>
    <h1 style={{textAlign: "center"}}>Pokemon</h1>
    <div style={{textAlign: "center"}}>
        <input 
            type="text" 
            className="buscador"
            placeholder="Ingrese Pokemon a Buscar"
            onChange={handleSearch}>
        </input>
    </div>
    <p style={{textAlign: "center"}}> Pagina {currentPage}</p>
    <input type="checkbox"></input>
    <ul className='cards'>
        {
            currentItems.map((p)=>{
                return <CardsPokemon urlItem={p.url}/>
            })
        }
    </ul>
    <div style={{textAlign: "center"}}>
    <button onClick={prevPage}>Previous</button>
    <button onClick={nextPage}>Next</button>
    </div>
    
    </>
  )
}
