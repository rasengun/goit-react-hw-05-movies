import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import HomePage from './Pages/Home/Home';
import MoviesPage from './Pages/Movies/Movies';
import NotFoundPage from './Pages/NotFound/NotFount';
import SingleMoviePage from './Pages/SingleMoviePage/SingleMoviePage';
import Cast from './Pages/SingleMoviePage/Cast/Cast';
import Reviews from './Pages/SingleMoviePage/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route
          path="/movies/:id/cast"
          element={
            <>
              <SingleMoviePage />
              <Cast />
            </>
          }
        />
        <Route
          path="/movies/:id/reviews"
          element={
            <>
              <SingleMoviePage />
              <Reviews />
            </>
          }
        />
        <Route path="/movies/:id/reviews" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
