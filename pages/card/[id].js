import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import css from '@/styles/card.module.css';
import { HeartFilled, PlayCircleFilled, CloseOutlined } from '@ant-design/icons';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import axios from "axios";
import Link from "next/link";


const CardId = () => {

    const address = "https://api.themoviedb.org/3/";

    const [movies, setMovies] = useState([]);
    const [image, setImage] = useState({});
    const router = useRouter();
    const { id } = router.query;

    const GetDetails = async () => {
        const strimage = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1665407252326530351ed5a76c30158f&language=en-US`);
        const json = await strimage.json();
        setImage(json);
        console.log(json);
    };

    const getsimilarMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=1665407252326530351ed5a76c30158f&language=en-US&page=1`);
        setMovies(data.results);
    }


    useEffect(() => {
        GetDetails();
        getsimilarMovies();
    }, []);

    // const bg = `https://image.tmdb.org/t/p/w500/${image.poster_path}`;

    return image ? (
        <div key={image.id}>
            <Nav></Nav>
            <div className={`${css.popup}`}>
                <div className={`${css.image}`}>
                    <img key={image.id} height={300} src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`} />
                </div>
                <div className={`${css.content}`}>
                    <div className={`${css.one}`}>
                        <div>
                            <h1>{image.title}</h1>
                            <h4>{image.runtime} min | {image.release_date} | {image.original_language} </h4>
                        </div>
                        <h5>{image.vote_average} <HeartFilled /></h5>
                    </div>
                    <div className={`${css.two}`}>
                        <p>{image.overview} <br /> <br /> "{image.tagline}" </p>
                        <table className={`${css.table}`}>
                            <tr>
                                <td className={`${css.td}`} style={{ width: '30%', color: '#B0A4A4' }}>
                                    Genres:
                                </td>
                                <td className={`${css.td}`} style={{ width: '70%' }}>
                                    {image.genres ? image.genres.map((genre) => genre.name + ", ") : ''}
                                </td>
                            </tr>
                            <tr>
                                <td className={`${css.td}`} style={{ width: '30%', color: '#B0A4A4' }}>
                                    Languages:
                                </td>
                                <td className={`${css.td}`} style={{ width: '70%' }}>
                                    {image.spoken_languages
                                        ? image.spoken_languages
                                            .map((lang) => lang.name + ", ") : ''}
                                </td>
                            </tr>
                            <tr>
                                <td className={`${css.td}`} style={{ width: '30%', color: '#B0A4A4' }}>
                                Production Companies:
                                </td>
                                <td className={`${css.td}`} style={{ width: '70%' }}>
                                {image.production_companies ? image.production_companies.map((com) => com.name + ", ") : ''}
                                    
                                </td>
                            </tr>
                        </table>
                    </div>
                    {/* <h1 className={`${css.watch}`}><Link href=""><PlayCircleFilled style={{ fontSize: '2.5vmax', cursor: 'pointer' }} /> Watch Trailer</Link></h1> */}
                </div>
                {/* <div className={`${css.close}`}>
                    <Link href="" onclick="hide('popup')"><CloseOutlined style={{ fontSize: '1.4vmax', cursor: 'pointer' }}/></Link>
                </div> */}
            </div>
            {/* <div className={`${css.video}`}>
                <video autoplay muted loop src="Ink - 67358.mp4"></video>
            </div> */}
            <div className={`${css.similarMovies}`}>
                <h1>Smililar Movies</h1>
                <hr />
                <div className={`${css.movie}`}>
                    {movies && movies.map((m) => (
                        <div key={m.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} />
                            <h4><Link href={`/card/${m.id}`}>{m.title}</Link></h4>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    ) : (
        "Loading..."
    );
};

export default CardId;