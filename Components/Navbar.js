import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box w={"82%"} margin="auto" py={2} textColor={'white'}>
      <Flex placeItems={"center"}>
        <Heading size="md">
          <Link href={"/"}>
            <Heading fontSize={"lg"}>
              {" "}
              <span className="funnyHead">R</span>ealance
            </Heading>
          </Link>
        </Heading>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="outline"
              icon={<GiHamburgerMenu />}
            />
            <MenuList background={'blackAlpha.400'} >
              <MenuItem icon={<BsFillHouseFill />}  >
              <Link href={'/search?purpose=for-sale'}><a>For Sale</a></Link>
              </MenuItem>
              <MenuItem icon={<FaHouseUser />} textColor='white' >
              <Link href={'/search?purpose=for-rent'}><a>For Rent</a></Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
