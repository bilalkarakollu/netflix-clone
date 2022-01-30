import React, { useEffect, useState } from 'react';
import { Image, Flex, Heading, Box, Text, Button, Icon } from '@chakra-ui/react'
import { IoPlaySharp, IoAlertCircleOutline } from 'react-icons/io5'
import { fetchApi, textCute } from '../../utils';
const ImgPath = 'https://image.tmdb.org/t/p/original'
export default function Index({ title, request, comp }) {

    useEffect(() => {

        const fetchBanner = async () => {
            const { data, message, status } = await fetchApi(request)
            console.log(data.results)
            if (status === 200) {
                setBanner(data.results[Math.floor(Math.random() * 19)])
                setLoading(false)
            }
        }
        fetchBanner()

    }, [0])

    const [banner, setBanner] = useState(null)
    const [loading, setLoading] = useState(true)

    const compRet = () => {
        if (!loading) {
            if (comp === 'tv') {
                return banner.original_name
            } else {
                return banner.original_title
            }
        } else {
            return null
        }
    }

    return (
        <>
            <Flex position={'relative'} h={'100vh'}>
                <Image
                    boxSize='100%'
                    h={'100%'}
                    objectFit='cover'
                    src={!loading ? `${ImgPath}${banner.backdrop_path}` : ''} />

                <Flex flexDirection={'column'} position={'absolute'} h={'100vh'} w={'100%'}>
                    <Flex ml={[2, 2, 55, 55]} position={'relative'} h={'100%'}>
                        <Box top={'8%'} position={'absolute'}>
                            <Heading fontWeight={700} as='h1' size='xl'>{title}</Heading>
                        </Box>
                        <Box top={'31%'} w={['100%', '100%', '50%', '50%']} position={'absolute'}>
                            <Heading fontFamily={'cursive'} fontWeight={700} as='h1' fontSize={[50, 50, 150, 150]}>{!loading && textCute(compRet(), 15)}</Heading>
                            <Text fontWeight={500} fontSize={['sm', 'sm', '2xl', '2xl']}>
                                {!loading && textCute(banner.overview, 260)}
                            </Text>
                            <Flex mt={5}>
                                <Button py={[1, 1, 2, 2]} mr={3} px={[5, 5, 10, 10]} size={['md', 'md', '4xl', '4xl']} color={'black'} fontSize={['15px', '15px', '25px', '25px']} colorScheme='gray'>
                                    <Icon as={IoPlaySharp} size={[35, 35, 40, 40]} style={{ marginRight: 10 }} /> Play
                                </Button>
                                <Button py={[1, 1, 2, 2]} mr={3} px={[5, 5, 10, 10]} size={['md', 'md', '4xl', '4xl']} fontSize={['15px', '15px', '25px', '25px']} colorScheme='blackAlpha'>
                                    <Icon as={IoAlertCircleOutline} size={[35, 35, 40, 40]} style={{ marginRight: 10 }} /> More Info
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
