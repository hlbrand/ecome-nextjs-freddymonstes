import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Flex } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

export default function Header() {
  return (
    <Box w="100%" as="header" borderBottom="solid 2px" borderColor="gray.100">
      <Container
        as={Flex}
        justifyContent="space-between"
        alignItems="center"
        maxW="1110px"
      >
        <Box margin="1rem 0">
          <Image src="/logo.svg" alt="Logo" width={100} height={48} />
        </Box>
        <nav>
          <Flex as="ul" listStyleType="none" gap="2rem">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/#">Woman</Link>
            </li>
            <li>
              <Link href="/#">Men</Link>
            </li>
            <li>
              <Link href="/#">Accessories</Link>
            </li>
            <li>
              <Link href="/#">Blog</Link>
            </li>
            <li>
              <Link href="/#">Contact</Link>
            </li>
          </Flex>
        </nav>

        <div className="commerce-menu">
          <Flex as="ul" listStyleType="none" gap="1.5rem">
            <li>
              <Link href="#">
                <SearchIcon width="24" height="24" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <PublicOutlinedIcon width="24" height="24" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <PersonOutlineOutlinedIcon width="24" height="24" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <ShoppingBagOutlinedIcon width="24" height="24" />
              </Link>
            </li>
          </Flex>
        </div>
      </Container>
    </Box>
  );
}
