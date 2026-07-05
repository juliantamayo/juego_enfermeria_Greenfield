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
    titleKey: "case2.scene3.assessmentAreas.area1.title",
    descriptionKey: "case2.scene3.assessmentAreas.area1.description",
    iconName: "flower-outline",
    flowId: "area1",
  },
  {
    id: "area2",
    titleKey: "case2.scene3.assessmentAreas.area2.title",
    descriptionKey: "case2.scene3.assessmentAreas.area2.description",
    iconName: "footsteps-outline",
    flowId: "area2",
  },
  {
    id: "area3",
    titleKey: "case2.scene3.assessmentAreas.area3.title",
    descriptionKey: "case2.scene3.assessmentAreas.area3.description",
    iconName: "footsteps-outline",
    flowId: "area3",
  },
  {
    id: "area4",
    titleKey: "case2.scene3.assessmentAreas.area4.title",
    descriptionKey: "case2.scene3.assessmentAreas.area4.description",
    iconName: "happy-outline",
    flowId: "area4",
  },
  {
    id: "area5",
    titleKey: "case2.scene3.assessmentAreas.area5.title",
    descriptionKey: "case2.scene3.assessmentAreas.area5.description",
    iconName: "ear-outline",
    flowId: "area5",
  },
  {
    id: "area6",
    titleKey: "case2.scene3.assessmentAreas.area6.title",
    descriptionKey: "case2.scene3.assessmentAreas.area6.description",
    iconName: "ear-outline",
    flowId: "area6",
  },
  {
    id: "area7",
    titleKey: "case2.scene3.assessmentAreas.area7.title",
    descriptionKey: "case2.scene3.assessmentAreas.area7.description",
    iconName: "hand-left-outline",
    flowId: "area7",
  },
  {
    id: "area8",
    titleKey: "case2.scene3.assessmentAreas.area8.title",
    descriptionKey: "case2.scene3.assessmentAreas.area8.description",
    iconName: "fitness-outline",
    flowId: "area8",
  },
  {
    id: "area9",
    titleKey: "case2.scene3.assessmentAreas.area9.title",
    descriptionKey: "case2.scene3.assessmentAreas.area9.description",
    iconName: "hand-left-outline",
    flowId: "area9",
  },
  {
    id: "area10",
    titleKey: "case2.scene3.assessmentAreas.area10.title",
    descriptionKey: "case2.scene3.assessmentAreas.area10.description",
    iconName: "walk-outline",
    flowId: "area10",
  },
  {
    id: "area11",
    titleKey: "case2.scene3.assessmentAreas.area11.title",
    descriptionKey: "case2.scene3.assessmentAreas.area11.description",
    iconName: "footsteps-outline",
    flowId: "area11",
  },
  {
    id: "area12",
    titleKey: "case2.scene3.assessmentAreas.area12.title",
    descriptionKey: "case2.scene3.assessmentAreas.area12.description",
    iconName: "body-outline",
    flowId: "area12",
  },
  {
    id: "area13",
    titleKey: "case2.scene3.assessmentAreas.area13.title",
    descriptionKey: "case2.scene3.assessmentAreas.area13.description",
    iconName: "footsteps-outline",
    flowId: "area13",
  },
  {
    id: "area14",
    titleKey: "case2.scene3.assessmentAreas.area14.title",
    descriptionKey: "case2.scene3.assessmentAreas.area14.description",
    iconName: "finger-print-outline",
    flowId: "area14",
  },
  {
    id: "area15",
    titleKey: "case2.scene3.assessmentAreas.area15.title",
    descriptionKey: "case2.scene3.assessmentAreas.area15.description",
    iconName: "cube-outline",
    flowId: "area15",
  },
];

export type { Scene3AssessmentArea };
export default scene3AssessmentAreas;
