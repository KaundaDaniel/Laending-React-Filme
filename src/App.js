import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import SearhIcon from './search.svg';

import './App.css';
//e84545fc

const API_URL = "https://www.omdbapi.com?apikey=e84545fc";


const App = () =>{
    const [filmes, setFilmes]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');
    
    const procuraFilmes = async (title) =>{
        const resposta= await fetch(`${API_URL}&s=${title}`);
        const data=await resposta.json();
        setFilmes(data.Search);
    }
    useEffect(()=>{
        procuraFilmes();

    }, []);
return(
    <div className="app">
        <h1>Filmes</h1>
        <div className="search">
            <input type="text" placeholder='Digite um filme' 
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}

            />
    <img 
    src={SearhIcon} 
    alt="Search"
    onClick={()=> procuraFilmes(searchTerm)}
    />
        </div>


        {
            filmes?.length>0?
            (

                <div className='container'>
                {filmes.map((filme)=>
                (<MovieCard filme={filme}/>
                
                
                ))}
              </div>        
            ):(
                <div className='empty'>
                    <h2>Nenhum filme encontrado</h2>
                </div>
            )
        }

        
    </div>

);

}
export default App;