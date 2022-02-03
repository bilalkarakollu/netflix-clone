import React from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Button, useDisclosure, Box
} from '@chakra-ui/react'
import Links from './links';

export default function DrawerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button display={['flex', 'flex', 'none', 'none']} onClick={onOpen} mx={2} color={'white'} fontWeight={400} variant="link">
                <IoReorderThreeOutline size={40} />
            </Button>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody justifyContent={'start'} textAlign={'left'} background={'black'} color={'white'}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Links cc={onClose} />
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}