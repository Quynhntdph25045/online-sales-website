

import inst from "./inst"

const getAllMovie = () => {
    return inst.get('/movies');
}
const getMovieById = (id: any) => {
    return inst.get('/movies/' + id);
}

const getAllGenre = () => {
    return inst.get('/genres');
}
const getAllCombo = () => {
    return inst.get('/combo');
}
export{getAllMovie, getAllGenre, getMovieById, getAllCombo}

