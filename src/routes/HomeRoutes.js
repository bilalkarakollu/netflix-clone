import React from 'react';
import { Routes, Route } from "react-router-dom";
import App from '../layout/App'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import TVShows from '../pages/TVShows'
import Latest from '../pages/Latest'
import MyList from '../pages/MyList'

export default function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="tvshows" element={<TVShows />} />
                <Route path="movies" element={<Movies />} />
                <Route path="latest" element={<Latest />} />
                <Route path="my-list" element={<MyList />} />
            </Route>
        </Routes>
    );
}
