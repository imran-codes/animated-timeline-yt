import { useTheme } from "styled-components";
import ClipBoard from "../../../assets/ClipBoard";
import Person from "../../../assets/Person";
import Photo from "../../../assets/Photo";
import Timer from "../../../assets/Timer";
import { TimelineDetailsType } from "../../../types";
import ImageWrapper from "../ImageWrapper";
import Line from "../Line";
import { CenterText, HR, HRContainer } from "./styled";

export const handleLine = (data: TimelineDetailsType) => {
  if (data.imageType !== "line" && data.imageType !== "lunch") {
    return (
      <div>
        <Line />
      </div>
    );
  }
  return null;
};

export const handleIcons = (
  imageType: string,
  text: string,
  hoveredItem: number | null,
  id: number
) => {
  const { colors } = useTheme();
  const hasBeenHovered = hoveredItem !== null && hoveredItem >= id;
  switch (imageType) {
    case "doorsOpen":
      return (
        <ImageWrapper hasBeenHovered={hasBeenHovered}>
          <Timer fill={hasBeenHovered ? colors.iconHovered : colors.icon} />
        </ImageWrapper>
      );
    case "doorsClosed":
      return (
        <ImageWrapper hasBeenHovered={hasBeenHovered}>
          <Person fill={hasBeenHovered ? colors.iconHovered : colors.icon} />
        </ImageWrapper>
      );
    case "photo":
      return (
        <ImageWrapper hasBeenHovered={hasBeenHovered}>
          <Photo fill={hasBeenHovered ? colors.iconHovered : colors.icon} />
        </ImageWrapper>
      );
    case "start":
      return (
        <ImageWrapper hasBeenHovered={hasBeenHovered}>
          <ClipBoard fill={hasBeenHovered ? colors.iconHovered : colors.icon} />
        </ImageWrapper>
      );
    case "line":
      return (
        <HRContainer>
          <HR isHovered={hasBeenHovered} />
        </HRContainer>
      );
    case "lunch":
      return (
        <CenterText>
          <p>{text}</p>
        </CenterText>
      );
    default:
      return null;
  }
};
