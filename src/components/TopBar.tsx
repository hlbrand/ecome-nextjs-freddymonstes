import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Grid } from "@chakra-ui/react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function TopBar() {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      borderColor="gray.100"
      bgColor="black"
      textColor="white"
    >
      <Flex as="ul" listStyleType="none" gap="2rem">
        <Box style={{ display: "flex" }}>
          <LocalPhoneIcon style={{ width: "20px" }} />
          <p style={{ fontSize: "13px" }}>+38 (050) 12 34 56 78</p>
        </Box>
        <Box style={{ display: "flex" }}>
          <LocationOnIcon style={{ width: "20px" }} />
          <p style={{ fontSize: "13px" }}>Ukraina</p>
        </Box>
        <Box style={{ display: "flex" }}>
          <AccessTimeFilledIcon style={{ width: "20px" }} />
          <p style={{ fontSize: "13px" }}>All week 24/7</p>
        </Box>
      </Flex>

      <div className="social">
        <Flex as="ul" listStyleType="none" gap="1rem">
          <Grid
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FacebookIcon style={{ fontSize: "20px" }} />
          </Grid>
          <Grid
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TwitterIcon style={{ fontSize: "20px" }} />
          </Grid>
          <Grid
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InstagramIcon style={{ fontSize: "20px" }} />
          </Grid>
          <Grid
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PinterestIcon style={{ fontSize: "20px" }} />
          </Grid>
        </Flex>
      </div>
    </Flex>
  );
}
