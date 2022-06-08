import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import familyHome from "../assets/architecture-g2cb6dbf14_1280.jpg";
import Link from 'next/link'

const Banner = () => {
  return (
    <Box className="headerBg">
      <SimpleGrid 
        columns={[1, 2, 2]} 
        gap={6}
        textAlign={['center', 'left']}
        alignItems='center'
        py={14}
        width={'82%'}
        mx={'auto'}
      >
        <Box textColor={'white'}>
          <Text fontSize="md" color={"#68D391"}>
            Find The Best Properties
          </Text>
          <Heading fontSize={['2.3rem', '2.2rem', '3.3rem']} my={6}>
            Find your perfect property with us
          </Heading>
          <Text fontSize="0.8rem" maxW={'md'} my={4}>
            Pearl Gardens is a leading real estate organization that offers both
            modern and luxury houses for sale or for rent.
          </Text>
          <Stack direction="row" spacing={4} justifyContent={["center", "left"]} mt={8}>
            <Button colorScheme="green" variant="solid">
            <Link href={'/search?purpose=for-sale'}><a>Buy Property</a></Link>
            </Button>
            <Button colorScheme="green" variant="outline">
            <Link href={'/search?purpose=for-rent'}><a>Rent Property</a></Link>
            </Button>
          </Stack>
        </Box>
        <Box >
          <Flex
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
            background={'whiteAlpha.400'}
          >
              <Box >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={familyHome}
                />
              </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Banner;
