import { slugify } from "@/utils/slugify";
import { Grid, GridItemProps, GridItem } from "@chakra-ui/react";
import { CenteredLabel } from "./CenteredLabel";
import Image from "next/image";
import { Categories } from "@/models/Categories";

export function HomeHeroCategories(categories: Categories[]) {
  return (
    <Grid
      templateColumns="540px 255px 255px"
      gap="1rem"
      templateRows="200px 260px"
    >
      {categories.map((cat, key) => {
        const slug = slugify(cat);
        const imageUrl = `/pic-categories-${slug}.jpg`;

        const props: GridItemProps = {
          position: "relative",
          w: "100%",
          h: "100%",
        };

        if (key === 0) {
          props.rowSpan = 2;
        }

        if (key === categories.length - 1) {
          props.colSpan = 2;
        }

        return (
          <GridItem {...props} key={key}>
            <Image
              src={imageUrl}
              alt={cat}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <CenteredLabel>{cat}</CenteredLabel>
          </GridItem>
        );
      })}
    </Grid>
  );
}
