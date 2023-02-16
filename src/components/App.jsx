import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import('./Navbar/Navbar'));
const HomePage = lazy(() => import('./Pages/Home/Home'));
const MoviesPage = lazy(() => import('./Pages/Movies/Movies'));
const NotFoundPage = lazy(() => import('./Pages/NotFound/NotFount'));
const SingleMoviePage = lazy(() =>
  import('./Pages/SingleMoviePage/SingleMoviePage')
);
const Cast = lazy(() => import('./Pages/SingleMoviePage/Cast/Cast'));
const Reviews = lazy(() => import('./Pages/SingleMoviePage/Reviews/Reviews'));

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
