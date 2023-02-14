import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import HomePage from './Pages/Home/Home';
import MoviesPage from './Pages/Movies/Movies';
import NotFoundPage from './Pages/NotFound/NotFount';
import SingleMoviePage from './Pages/SingleMoviePage/SingleMoviePage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
