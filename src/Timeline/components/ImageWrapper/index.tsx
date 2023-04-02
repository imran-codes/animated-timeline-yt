import React from "react";
import { ImageWrapperProps } from "./index.interface";
import { Border, Container } from "./styled";

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  children,
  hasBeenHovered,
}) => {
  return (
    <Container>
      <Border hasBeenHovered={hasBeenHovered}>{children}</Border>
    </Container>
  );
};

export default ImageWrapper;
