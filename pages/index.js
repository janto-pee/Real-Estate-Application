import Banner from "../Components/Banner";
import { Box, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import Property from "../Components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ rentList, buyList }) {
  return (
    <Box>
      <Box className="headBg">
        <Banner />
      </Box>
      <Box w={"82%"} margin="auto">
        <Box mt={"5rem"} textAlign="center">
          <Box>
            <Heading fontSize="1.4rem" mt={10} mb={1} textAlign={"left"}>
              Properties For Sale
            </Heading>
            <Text fontSize="0.9rem" mx={"auto"} mb={"3rem"} textAlign={"left"}>
              See our featured properties and explore all of that to know more
              about our properties for sale
            </Text>
            <SimpleGrid columns={[1, 2, 3]} gap={6} className="homeGrid">
              {buyList.map((buyItem) => (
                <Property item={buyItem} key={buyItem.id} />
              ))}
            </SimpleGrid>
          </Box>
          <Box>
            <Heading fontSize="1.4rem" mt={10} mb={1} textAlign={"left"}>
              Featured Properties For Rent
            </Heading>
            <Text
              fontSize="0.9rem"
              mx={"auto"}
              mb={"3rem"}
              // maxWidth={"container.md"}
              textAlign={"left"}
            >
              See our featured properties and explore all of that to know more
              about our properties for rent
            </Text>
            <SimpleGrid columns={[1, 2, 3]} gap={6} className="homeGrid">
              {rentList.map((rentItem) => (
                <Property item={rentItem} key={rentItem.id} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const sale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const rent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      buyList: sale?.hits,
      rentList: rent?.hits,
    },
  };
}
