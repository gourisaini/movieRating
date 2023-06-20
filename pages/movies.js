// import React, { useEffect, useState } from 'react'
// import { PlayCircleOutlined,CoffeeOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import axios from 'axios';
// import Nav from '@/components/Nav';

// const Movies = () => {

//   const [movies,setMovies] = useState([]);
//   const getMovies = async()=>{
//     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=1665407252326530351ed5a76c30158f&query&language=en-US`);
//     setMovies(data.results);
//   }

//   useEffect(()=>{
//     getMovies();
//   })

//   return (
//     <>
//     <div className='main'>
//       <Nav></Nav>
//       <div className='overlay'></div>
//       <h1>welcome</h1>
//       <h3>Millions of movies & TV shows to discover, <br /> Explore now.</h3>
//       <div><PlayCircleOutlined style={{ fontSize: '3vmax', cursor: 'pointer'}} /></div>
//     </div>
//     <div className='movies'>
//     {movies && movies.map((m) => (
//                   <div id='moviesStyle'>
//                   <img key={m.id} height={300} src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}/>
//                   <h2>{m.title}</h2>
//                   <h3>{m.vote_count} Peoples like this </h3>
//                   </div>
//                 ))}
//     <Button type="link" block> see more</Button>
//     </div>
//     </>
//   )
// }

// export default Movies