import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function TopBar() {
  return (
    <Box
      bg="black"
      w="100%"
      p={2}
      color="white"
      justifyContent="space-between"
      fontSize="xs"
    >
      <Container
        as={Flex}
        justifyContent="space-between"
        alignItems="center"
        size="lg"
      >
        <Flex gap="1.5rem">
          <Flex as={Link} href="#" alignItems="center" gap="0.5rem">
            <LocalPhoneIcon width="24px" />
            <p>+38 (050) 12 34 567</p>
          </Flex>
          <Flex as={Link} href="#" alignItems="center" gap="0.5rem">
            <LocationOnIcon width="24px" />
            <p>Ukraine, Kyiv, Kojwhrelh</p>
          </Flex>
          <Flex as={Link} href="#" alignItems="center" gap="0.5rem">
            <AccessTimeFilledIcon width="24px" />
            <p>All week 24/7</p>
          </Flex>
        </Flex>

        <Flex gap="1rem">
          <Link href="#">
            <FacebookIcon width="24px" />
          </Link>
          <Link href="#">
            <TwitterIcon width="24px" />
          </Link>
          <Link href="#">
            <InstagramIcon width="24px" />
          </Link>
          <Link href="#">
            <PinterestIcon width="24px" />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
