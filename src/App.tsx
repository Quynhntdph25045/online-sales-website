
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import LayoutPerson from './component/layoutPerson/LayoutPerson'
import HomePage from './personPage/Homepage'
import { getAllCombo, getAllGenre, getAllMovie } from './api/movie'
import { useEffect, useState } from 'react'
import { Combo, Genre, Movie } from './types/movie'
import Booking from './personPage/Booking'
import NewFilm from './personPage/newFilm'
import ComboBooking from './personPage/Combo'
import SeatBooking from './personPage/SeatBooking'
import Signin from './personPage/Signin'
import Signup from './personPage/Signup'
function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [genres, setGenres] = useState<Genre[]>([])
  const [combo, setCombo] = useState<Combo[]>([])


  useEffect(() => {
    getAllMovie().then(({ data }) => setMovies(data));
    getAllGenre().then(({ data }) => setGenres(data));
    getAllCombo().then(({ data }) => setCombo(data));

  }, [])

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<LayoutPerson />}>
          <Route index element={<HomePage Movies={movies} genres={genres} />} />
          <Route path="new" element={<NewFilm />} />
        </Route>
        <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

        <Route path='booking/:id' element={<Booking Movies={movies} />}>
          <Route index element={<SeatBooking/>} />
          <Route path="combo" element={<ComboBooking Combo={combo}/>} />
        </Route>


      </Routes>
    </div>
  )
}

export default App