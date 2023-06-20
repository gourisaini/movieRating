import React from 'react'

const Videos = () => {
    const [video, setVideo] = useState({});
    const router = useRouter();
    const { id } = router.query;
    const GetVideos = async () => {
        const strimage = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1665407252326530351ed5a76c30158f
        &language=en-US`);
        const json = await strimage.json();
        setImage(json);
    };

    useEffect(() => {
        GetVideos();
    }, []);

  return (
    <div>
        {/* GetVideos(); */}
    </div>
  )
}

export default Videos