import React, {useState} from 'react'
import { Box, Flex, Select,  } from '@chakra-ui/react'
import { filterData, getFilterValues } from '../utils/filterData'
import { useRouter } from 'next/router'


const Filters = () => {
  const [filterD] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });
  };

  return (
    <Box  w={'82%'}  margin='auto' py={2} >
      <Flex p='4' justifyContent='center' flexWrap='wrap'>
        {filterD?.map((filter) => (
          <Box key={filter.queryName}>
            <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>

    </Box>
  )
}

export default Filters