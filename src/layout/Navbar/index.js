import React, { useEffect, useState } from 'react';
import { Flex, Button, Box, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { IoSearchSharp, IoNotifications } from 'react-icons/io5'

export default function Index() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0.5) {
                setNavbarPosition('fixed');
                setNavbarBackground('rgba(19, 19, 19, 1)')
                setNavbarTransition('50ms ease-in')
            } else {
                setNavbarPosition('absolute');
                setNavbarBackground('linear-gradient(0deg, rgba(255,0,0,0), rgba(0, 0, 0, 0.774) 100%) no-repeat')
                setNavbarTransition('1s ease-out')
            }
        });
    }, [0])

    const [navbarPosition, setNavbarPosition] = useState('absolute');
    const [navbarTransition, setNavbarTransition] = useState('50ms ease-in');
    const [navbarBackground, setNavbarBackground] = useState('linear-gradient(0deg, rgba(255,0,0,0), rgba(0, 0, 0, 0.774) 100%) no-repeat');

    return (
        <Flex>
            <Flex className='navbar' zIndex={50} transition={navbarTransition} background={navbarBackground} position={navbarPosition} align={'center'} w={'100%'}>
                <Flex align={'center'} width={'100%'} justifyContent={'space-between'} py={[3, 3, 1, 1]} px={[2, 2, 10, 12]}>
                    <Flex alignItems={'center'} >
                        <Flex alignItems={'center'}>
                            <NavLink to={'/'}>
                                <Box mx={3}>
                                    <Image src='/img/netflix-logo.png' alt='netflix-clone' width={93} />
                                </Box>
                            </NavLink>
                        </Flex>
                        <Flex alignItems={'center'} display={['none', 'none', 'flex', 'flex']}>
                            <NavLink to="/">
                                <Button color={'white'} fontWeight={400} variant="link" aria-label="Home" mx={3} my={5} w="100%">
                                    Home
                                </Button>
                            </NavLink>
                            <NavLink to="/tvshows">
                                <Button color={'white'} fontWeight={400} variant="link" aria-label="TvShows" mx={3} my={5} w="100%">
                                    Tv Shows
                                </Button>
                            </NavLink>
                            <NavLink to="/movies">
                                <Button color={'white'} fontWeight={400} variant="link" aria-label="Movies" mx={3} my={5} w="100%">
                                    Movies
                                </Button>
                            </NavLink>
                            <NavLink to="/latest">
                                <Button color={'white'} fontWeight={400} variant="link" aria-label="Movies" mx={3} my={5} w="100%">
                                    New and Popular
                                </Button>
                            </NavLink>
                            <NavLink to="/my-list">
                                <Button color={'white'} fontWeight={400} variant="link" aria-label="Movies" mx={3} my={5} w="100%">
                                    My List
                                </Button>
                            </NavLink>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Button mx={2} color={'white'} fontWeight={400} variant="link" aria-label="Movies" w="100%">
                            <IoSearchSharp size={25} />
                        </Button>
                        <Button mx={2} color={'white'} fontWeight={400} variant="link" aria-label="Movies" w="100%">
                            <IoNotifications size={25} />
                        </Button>
                        <Button mx={2} color={'white'} fontWeight={400} variant="link" aria-label="Movies" w="100%">
                            <Image borderRadius={4} src='/img/account.png' width={8} height={8} />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
