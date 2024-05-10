import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, } from './MovieService';

const MovieView = () => {

    const movies = useSelector((state) => state.movie.movies);
    const error = useSelector((state) => state.movie.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (!error) {
        return (
            <div>
                <h2>Movie List Component</h2>
                {movies?.map((m, i) => {
                    return (
                        <div key={i}>
                            <p>Id : {m.id}</p>
                            <p>Title : {m.title}</p>
                            <p>Producer : {m.producer}</p>
                            <p>Director : {m.director}</p>
                        </div>
                    )
                })}

            </div>
        );
    }
    
    return (
        <p>This is the Error : {error}</p>
    )
};

export default MovieView;