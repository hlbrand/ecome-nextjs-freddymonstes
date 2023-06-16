import { Flex } from "@chakra-ui/react";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportIcon from "@mui/icons-material/Support";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import { AdvantageItem } from "./AdvantageItem";

export default function AdvantageSection() {
  return (
    <Flex gap="1rem" justifyContent="space-between" margin="2rem 0">
      <AdvantageItem
        title="FREE SHIPPING"
        content="On all UA order or order above $100"
        icon={LocalShippingIcon}
      ></AdvantageItem>
      <AdvantageItem
        title="30 DAYS RETURN"
        content="Simply return it within 30 days for an exchange"
        icon={AutorenewIcon}
      ></AdvantageItem>
      <AdvantageItem
        title="SUPPORT 24/7"
        content="Contact us 24 hours a day, 7 days a week"
        icon={SupportIcon}
      ></AdvantageItem>
    </Flex>
  );
}
