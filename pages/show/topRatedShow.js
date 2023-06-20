import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';


const topRatedShow = () => {
    const [movies,setMovies] = useState([]);
    const getLatestMovies = async()=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=1665407252326530351ed5a76c30158f&language=en-US&page=1`);
      setMovies(data.results);
    }
  
    useEffect(()=>{
      getLatestMovies();
    })
  
    return (
      <>
      <Nav></Nav>
      <div className='movies'>
      {movies && movies.map((m) => (
                    <div id='moviesStyle' key={m.id} >
                    <img key={m.id} height={300} src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}/>
                    <h2>{m.title}</h2>
                    <h3>{m.vote_count} Peoples like this </h3>
                    </div>
                  ))}
      </div>
      <Footer></Footer>
      </>
    )
}

export default topRatedShow