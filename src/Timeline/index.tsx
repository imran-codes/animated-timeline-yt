import React from "react";
import { timelineDetails } from "../data";
import IndividualStep from "./components/IndividualStep";
import { TimelineContainer } from "./styled";

const Timeline: React.FC = () => {
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null);
  return (
    <TimelineContainer>
      {timelineDetails?.map((item, index) => (
        <IndividualStep
          key={item.id}
          data={item}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          index={index}
        />
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
