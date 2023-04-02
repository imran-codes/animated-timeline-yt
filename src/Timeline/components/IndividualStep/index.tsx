import React from "react";
import Line from "../Line";
import { handleIcons, handleLine } from "./helper";
import { IndividualStepProps } from "./index.interface";
import { Container, IconsContainer, Text } from "./styled";

const IndividualStep: React.FC<IndividualStepProps> = ({
  data,
  hoveredItem,
  setHoveredItem,
  index,
}) => {
  return (
    <Container
      onMouseOver={() => setHoveredItem(index)}
      onMouseOut={() => setHoveredItem(null)}
    >
      <Text>{data.time}</Text>
      {handleLine(data)}
      <IconsContainer>
        {handleIcons(data.imageType, data?.text as string, hoveredItem, index)}
      </IconsContainer>
      {data.imageType === "lunch" ? null : <Text>{data.text}</Text>}
    </Container>
  );
};

export default IndividualStep;
