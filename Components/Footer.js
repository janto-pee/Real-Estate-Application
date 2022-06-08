import {Box,Flex, Text} from '@chakra-ui/react'
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bg={'green.100'} mt={8} py={6}  >
            <Flex w={'82%'} alignItems={'center'} mx='auto' justifyContent={'space-between'}>
                <Text>© 2022 Realance. All rights reserved</Text>
                <Flex gap={3}>
                    <AiFillFacebook fontSize={'md'} />
                    <AiFillLinkedin fontSize={'md'} />
                    <AiFillTwitterSquare fontSize={'md'}  />
                </Flex>
            </Flex>
        </Box>
    );
}

export default Footer;