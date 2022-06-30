import React from "react";
import Image from "next/image";
import Link from 'next/link'
import {
  Box,
  Badge,
  Grid,
} from "@chakra-ui/react";
import DefaultImage from "../assets/single-family-home.jpg";


const Property = ({ item }) => {
  const {
    coverPhoto,
    purpose,
    logo,
    baths,
    title,
    rooms,
    price,
    rentFrequency,
    externalID
  } = item;

  return (
    <Link href={`/properties/${externalID}`} passHref>
    <Grid w={"100%"} borderWidth="1px" borderRadius="lg" overflowX={'hidden'}>
      <Image
        src={coverPhoto ? coverPhoto.url : DefaultImage}
        width={400}
        height={260}
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline" textAlign={'left'}>
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
          as="h4"
          lineHeight="tight"
          // isTruncated
          textAlign={'left'}
        >
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Box>
        <Box py="4" textAlign={'left'} fontSize='sm'>
          AED
          <Box as="span" fontSize="md"  fontWeight="bold">
            {" "}
            {price}{" "}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {rentFrequency ? rentFrequency : ""}
          </Box>
        </Box>
      </Box>
    </Grid>
   </Link>
  );
};

export default Property;






























// import Image from 'next/image';
// import imageTest from '../assets/single-family-home.jpg'
// import { Box, Badge, StarIcon, Flex} from "@chakra-ui/react";
// import propertyCSS from '../styles/Property.module.css'


// const Property = () => {
//     const property = {
//         imageUrl: imageTest,
//         imageAlt: 'Rear view of modern home with pool',
//         beds: 3,
//         baths: 2,
//         title: 'Modern home in city center in the heart of historic Los Angeles',
//         formattedPrice: '$1,900.00',
//       }
//     return (
//         <Box maxW={'sm'} borderWidth='1px' borderRadius='lg' overflow='hidden' >
//             <Image src={property.imageUrl} alt={property.imageAlt} className='property-image' />
//           <Box p='6'>
//             <Box display='flex' alignItems='baseline'>
//               <Badge borderRadius='full' px='2' colorScheme='teal'> New </Badge>
//               <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
//                 {property.beds} beds &bull; {property.baths} baths
//               </Box>
//             </Box>
//           </Box>
//           <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated >
//             {property.title}
//           </Box>
//           <Box>
//             {property.formattedPrice}
//             <Box as='span' color='gray.600' fontSize='sm'>
//               / wk
//             </Box>
//           </Box>
//         </Box>
//     );
// }

// export default Property;