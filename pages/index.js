import React, { useEffect, useState } from 'react'
import { PlayCircleOutlined, CoffeeOutlined } from '@ant-design/icons';
import axios from 'axios';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import Link from "next/link";

const index = () => {
  const [movies, setMovies] = useState([]);
  const getLatestMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=1665407252326530351ed5a76c30158f`);
    setMovies(data.results);
    // try {
    //   for (let i = 0; i <= data.results.length; i++) {
    //     if (data.results[i].video != false) {
    //       console.log(data.results[i].video);
    //     }
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  useEffect(() => {
    getLatestMovies();
  })

  return (
    <>
      <Nav></Nav>
      <div className='main'>
        <div className='overlay'></div>
        <h1>welcome</h1>
        <h3>Millions of movies & TV shows to discover, <br /> Explore now.</h3>
        <div className='play'><PlayCircleOutlined style={{ fontSize: '3vmax', cursor: 'pointer' }} /></div>
      </div>
      <div className='movies'>
        {movies && movies.map((m) => (
          <div id='moviesStyle' key={m.id}>
            <img key={m.id} height={300} src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} />
            <h2><Link href={`/card/${m.id}`}>{m.title}</Link></h2>
            <h3>{m.vote_count} Peoples like this </h3>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  )
}

export default index;