import { Grid, GridItem, Icon, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  content: string;
  icon: string;
};

export function AdvantageItem({ title, content, icon }: Props) {
  return (
    <Grid gridTemplateColumns="40px 1fr" alignItems="center">
      <GridItem>
        <Icon as={icon} w="40px" h="40px" />
      </GridItem>
      <GridItem>
        <Text fontSize="md" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm">{content}</Text>
      </GridItem>
    </Grid>
  );
}
