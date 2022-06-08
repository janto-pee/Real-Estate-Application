import React, { useState } from "react";
import {
  Box,
  Center,
  Text,
  Heading,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { useRouter } from "next/router";
import { fetchApi } from "../utils/fetchApi";
import Property from "../Components/Property";
import Filters from "../Components/Filters";
import noresult from "../assets/indecisive-redhead.jpg";

const search = ({ searchKeys }) => {

  const [filterState, setFilterState] = useState(false);
  const router = useRouter();

  return (
    <Box w={"82%"} margin="auto">
      <Center
        bg="green.50"
        py={2}
        mt={5}
        onClick={() => setFilterState(!filterState)}
      >
        <Text>Search Property By Filter</Text> <BsFilter />
      </Center>
      {filterState ? (
        <Box my={2}>
          {" "}
          <Filters />{" "}
        </Box>
      ) : (
        ""
      )}
      <Box my={6}>
        <Heading>Properties {router.query.purpose}</Heading>
      </Box>
      <Grid templateColumns={["1fr", "repeat(2, 1fr)","repeat(3, 1fr)", ]} gap={6} className='homeGrid'>
        {searchKeys.map((searchKey) => (
          <Property item={searchKey} key={searchKey.id} />
        ))}
      </Grid>
      {searchKeys.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noresult} />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const searchQuery = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      searchKeys: searchQuery?.hits,
    },
  };
}
