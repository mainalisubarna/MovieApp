import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const moviesData = useSelector((state: any) => state.Movies.moviesData);
    useEffect(() => {
        setMovies(moviesData);
    }, [moviesData])
    return (
        
        <>
        <h1 className='mb-4 text-3xl text-center'>Popular Movies</h1>
            <div className='grid grid-cols-1 gap-4 my-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-xl:grid-cols-5 ms-auto'>
                {
                    movies.map((movie: any) => {
                        return (
                            <>
                                <div className='grid-item' key={movie.id}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt={movie.title}
                                            height="140"
                                            image={`https://image.tmdb.org/t/p/w400` + movie.poster_path}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {movie.title ? movie.title.slice(0,17)+' ...' : movie.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" className='text-justify'>
                                               {movie.overview ? movie.overview.slice(0,152)+' ...' : movie.overview}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MovieCard