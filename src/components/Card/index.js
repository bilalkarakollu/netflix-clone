import { Box, Image } from '@chakra-ui/react'
const ImgPath = 'https://image.tmdb.org/t/p/w500'

export default function Index({ data }) {

    if (data.backdrop_path) {
        return (
            <Box key={data.id} height={165} width={298} position={'relative'}>
                <Box height={'100%'} width={298}>
                    <Image objectFit='cover' boxSize='100%' objectPosition={'center'} src={ImgPath + data.backdrop_path} alt="" />
                </Box>
            </Box>
        )
    } else {
        return null
    }
}
