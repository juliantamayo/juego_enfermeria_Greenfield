import type { ImageSourcePropType } from "react-native";

export type SceneDialogEntry = {
  id: string;
  speaker: "nurse";
  image: ImageSourcePropType;
};

const nurseImage = require("@images/enfermera.png");
const nurseImage1 = require("@images/enfermera1.png");
const nurseImage2 = require("@images/enfermera2.png");
const nurseImage3 = require("@images/enfermera3.png");
const nurseImage4 = require("@images/enfermera4.png");

const scene1Dialog: SceneDialogEntry[] = [
  { id: "0", speaker: "nurse", image: nurseImage },
  { id: "1", speaker: "nurse", image: nurseImage1 },
  { id: "2", speaker: "nurse", image: nurseImage2 },
  { id: "3", speaker: "nurse", image: nurseImage3 },
  { id: "4", speaker: "nurse", image: nurseImage4 },
  { id: "5", speaker: "nurse", image: nurseImage4 },
  { id: "6", speaker: "nurse", image: nurseImage1 },
  { id: "7", speaker: "nurse", image: nurseImage3 },
  { id: "8", speaker: "nurse", image: nurseImage2 },
];

export default scene1Dialog;
