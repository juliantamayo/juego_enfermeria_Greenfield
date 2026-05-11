import type { ImageSourcePropType } from "react-native";

export type SceneDialogEntry = {
  id: string;
  speaker: "nurse";
  image: ImageSourcePropType;
};

const nurseImage = require("@images/enfermera.png");

const scene1Dialog: SceneDialogEntry[] = [
  { id: "0", speaker: "nurse", image: nurseImage },
  { id: "1", speaker: "nurse", image: nurseImage },
  { id: "2", speaker: "nurse", image: nurseImage },
  { id: "3", speaker: "nurse", image: nurseImage },
  { id: "4", speaker: "nurse", image: nurseImage },
  { id: "5", speaker: "nurse", image: nurseImage },
  { id: "6", speaker: "nurse", image: nurseImage },
  { id: "7", speaker: "nurse", image: nurseImage }
];

export default scene1Dialog;
