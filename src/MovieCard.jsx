import React  from 'react';




const MovieCard=({filme})=>{
return (

    <div className='movie'>
        <div>
            <p>{filme.Year}</p>
        </div>
        <div>
            <img src={filme.Poster !=='N/A' ? filme.Poster : 'https://via.placeholder.com/400'} alt="{filme.Title}" />
        </div>
        <div>
            <span>
                {filme.Type}
                <h3>{filme.Title}</h3>
            </span>
        </div>
    </div>
)
};

export default MovieCard;


