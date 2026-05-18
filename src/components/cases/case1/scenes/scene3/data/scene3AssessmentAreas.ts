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
    id: "area3",
    titleKey: "case1.scene3.assessmentAreas.area3.title",
    descriptionKey: "case1.scene3.assessmentAreas.area3.description",
    iconName: "happy-outline",
    flowId: "area3",
  },
  {
    id: "area4",
    titleKey: "case1.scene3.assessmentAreas.area4.title",
    descriptionKey: "case1.scene3.assessmentAreas.area4.description",
    iconName: "walk-outline",
    flowId: "area4",
  },
  {
    id: "area5",
    titleKey: "case1.scene3.assessmentAreas.area5.title",
    descriptionKey: "case1.scene3.assessmentAreas.area5.description",
    iconName: "body-outline",
    flowId: "area5",
  },
  {
    id: "area6",
    titleKey: "case1.scene3.assessmentAreas.area6.title",
    descriptionKey: "case1.scene3.assessmentAreas.area6.description",
    iconName: "footsteps-outline",
    flowId: "area6",
  },
  {
    id: "area7",
    titleKey: "case1.scene3.assessmentAreas.area7.title",
    descriptionKey: "case1.scene3.assessmentAreas.area7.description",
    iconName: "document-text-outline",
  },
];

export type { Scene3AssessmentArea };
export default scene3AssessmentAreas;
