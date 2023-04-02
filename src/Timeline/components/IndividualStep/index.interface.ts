import { TimelineDetailsType } from "../../../types";

export interface IndividualStepProps {
  data: TimelineDetailsType;
  hoveredItem: number | null;
  setHoveredItem: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
}
