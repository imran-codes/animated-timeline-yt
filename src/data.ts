import { TimelineDetailsType } from "./types";

export const timelineDetails: TimelineDetailsType[] = [
  {
    id: 1,
    time: "09:00",
    imageType: "doorsOpen",
    alt: "doors are open",
    text: "Grab a coffee and settle down.",
  },
  {
    id: 2,
    imageType: "line",
  },
  {
    id: 3,
    time: "10:00",
    alt: "start of session",
    imageType: "start",
    text: "Start of the session.",
  },
  {
    id: 4,
    imageType: "line",
  },
  {
    id: 5,
    time: "",
    alt: "",
    imageType: "lunch",
    text: "LUNCHTIME",
  },
  {
    id: 6,
    imageType: "line",
  },
  {
    id: 7,
    time: "14:00",
    alt: "photo image",
    imageType: "photo",
    text: "Time for pictures.",
  },
  {
    id: 8,
    imageType: "line",
  },
  {
    id: 9,
    time: "15:00",
    imageType: "doorsClosed",
    alt: "start of session",
    text: "The end.",
  },
];
