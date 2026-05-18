import type { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

type Scene3AssessmentArea = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: ComponentProps<typeof Ionicons>["name"];
  flowId?: string;
};

const scene3AssessmentAreas: Scene3AssessmentArea[] = [
  {
    id: "area1",
    titleKey: "case1.scene3.assessmentAreas.area1.title",
    descriptionKey: "case1.scene3.assessmentAreas.area1.description",
    iconName: "eye-outline",
    flowId: "area1",
  },
  {
    id: "area2",
    titleKey: "case1.scene3.assessmentAreas.area2.title",
    descriptionKey: "case1.scene3.assessmentAreas.area2.description",
    iconName: "scan-outline",
    flowId: "area2",
  },
  {
    id: "area4",
    titleKey: "case1.scene3.assessmentAreas.area4.title",
    descriptionKey: "case1.scene3.assessmentAreas.area4.description",
    iconName: "swap-horizontal-outline",
  },
  {
    id: "area5",
    titleKey: "case1.scene3.assessmentAreas.area5.title",
    descriptionKey: "case1.scene3.assessmentAreas.area5.description",
    iconName: "water-outline",
  },
  {
    id: "area7",
    titleKey: "case1.scene3.assessmentAreas.area7.title",
    descriptionKey: "case1.scene3.assessmentAreas.area7.description",
    iconName: "document-text-outline",
  },
  {
    id: "area8",
    titleKey: "case1.scene3.assessmentAreas.area8.title",
    descriptionKey: "case1.scene3.assessmentAreas.area8.description",
    iconName: "document-text-outline",
  },
  {
    id: "area9",
    titleKey: "case1.scene3.assessmentAreas.area9.title",
    descriptionKey: "case1.scene3.assessmentAreas.area9.description",
    iconName: "document-text-outline",
  },
];

export type { Scene3AssessmentArea };
export default scene3AssessmentAreas;
