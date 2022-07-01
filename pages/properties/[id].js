import { Box, Badge, Text } from "@chakra-ui/react";
import Image from 'next/image';
import DefaultImage from "../../assets/single-family-home.jpg";
import HorizontalScrollMenu from "../../Components/HorizontalScrollMenu";
import { fetchApi } from "../../utils/fetchApi";

const PropertyDetail = ({propertyDetails}) => {
        const {
          description,
          photos,
          purpose,
          baths,
          title,
          rooms,
          price,
          rentFrequency,

        } = propertyDetails;
    return (
        <Box mt={4} w={'82%'} mx='auto'>
                <Box mb={6}>
                {photos && <HorizontalScrollMenu photos={photos} /> }
                </Box>
                <Box>
                <Box>
                    <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {" "}
                        {purpose}{" "}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        <Box as="span" mr={2}>
                        {rooms} beds
                        </Box>{" "}
                        &bull; {baths} baths
                    </Box>
                    </Box>
                    <Box
                    mt="1"
                    fontWeight="semibold"
                    fontSize={'md'}
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    >
                    {title}
                    </Box>
                    <Box py="4">
                    AED
                    <Box as="span" fontSize="md" fontWeight="bold">
                        {" "}
                        {price}{" "}
                    </Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        {rentFrequency ? rentFrequency : ""}
                    </Box>
                    </Box>
                </Box>
                <Box marginTop='2'>
                    <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
                    <Text lineHeight='2' color='gray.600'>{description}</Text>
                </Box>
                <Box marginTop='2'>
                    <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
                    <Text lineHeight='2' color='gray.600'>{description}</Text>
                </Box>
            </Box>
        </Box>
    );
}

export const getServerSideProps = async({params: {id}}) => {
    
    const res = await fetchApi(`https://bayut.p.rapidapi.com/properties/detail/?externalID=${id}`)

    return {
        props : {
            propertyDetails: res
        }
    }
}

export default PropertyDetail;