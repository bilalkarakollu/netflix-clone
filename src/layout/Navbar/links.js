import React from 'react';
import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
export default function Links({ cc }) {
    return (
        <>
            <NavLink to="/">
                <Button onClick={cc} w={'100%'} justifyContent={['start', 'start', 'center', 'center']} color={'white'} fontWeight={400} variant="link" aria-label="Home" mx={3} my={5} >
                    Home
                </Button>
            </NavLink>
            <NavLink to="/tvshows">
                <Button onClick={cc} w={'100%'} justifyContent={['start', 'start', 'center', 'center']} color={'white'} fontWeight={400} variant="link" aria-label="TvShows" mx={3} my={5}>
                    Tv Shows
                </Button>
            </NavLink>
            <NavLink to="/movies">
                <Button onClick={cc} w={'100%'} justifyContent={['start', 'start', 'center', 'center']} color={'white'} fontWeight={400} variant="link" aria-label="Movies" mx={3} my={5}>
                    Movies
                </Button>
            </NavLink>
            <NavLink to="/latest">
                <Button onClick={cc} w={'100%'} justifyContent={['start', 'start', 'center', 'center']} color={'white'} fontWeight={400} variant="link" aria-label="Movies" mx={3} my={5}>
                    New and Popular
                </Button>
            </NavLink>
            <NavLink to="/my-list">
                <Button onClick={cc} w={'100%'} justifyContent={['start', 'start', 'center', 'center']} color={'white'} fontWeight={400} variant="link" aria-label="Movies" mx={3} my={5}>
                    My List
                </Button>
            </NavLink>
        </>
    );
}
