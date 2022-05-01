import { url } from "../consts/variousConstants";
import { PokeGameContext } from "../contexts/PokeGame.Context";
import useGetData from "../hooks/useGetData";
import { Home } from "../views/Home/Home";
//import {Cards} from "./cards/Cards";


function App() {
  const [{results: pokes}, loading, error] = useGetData(url);

  
  loading ? (
    <h2>Cargando...</h2>
  ) : error ?(
    <h3>Error: {error.message}</h3>
  ) : (
    console.log(pokes)
  )
  
  return (
    <>
    <PokeGameContext.Provider
    value={{pokes}}
    >
      {
        loading ? (
          <h2>Cargando...</h2>
        ) : error ?(
          <h3>Error: {error.message}</h3>
        ) : (
        <>
          <Home/>
        </>
        )
      }
    </PokeGameContext.Provider>

    </>  
  );
};
export default App;


