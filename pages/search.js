import Link from "next/link";
import React, { useState } from 'react'
import axios from 'axios';
import css from '../styles/search.module.css';
import Footer from '@/components/footer';


const search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const getLatestMovies = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1665407252326530351ed5a76c30158f&query=${query}`);
    setMovies(data.results);
  }

  // useEffect(() => {
  //   getLatestMovies();
  // })
  return (
    <>
      <div className={`${css.main}`}>
        <form onSubmit={(e) => getLatestMovies(e)} className={`${css.form}`}>
          <input className={`${css.input}`} type="text" placeholder='Search' value={query} onChange={(e) => { setQuery(e.target.value); console.log(query) }} />
        </form>
        <div className='movies'>
          {movies && movies.map((m) => (
            <div id='moviesStyle' key={m.id} >
              <img key={m.id} height={300} src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} />
              <h2><Link href={`/card/${m.id}`}>{m.title}</Link></h2>
            </div>
          ))}
        </div>
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default search;