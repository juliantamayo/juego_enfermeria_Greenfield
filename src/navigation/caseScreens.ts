import type { RootStackParamList } from "./types";

export const CASE_SCREENS: { name: string; label: string; screen: keyof RootStackParamList }[] = [
  { name: "Case1Menu", label: "cases.case1", screen: "Case1Menu" },
  { name: "Case2Menu", label: "cases.case2", screen: "Case2Menu" },
  { name: "Case3Menu", label: "cases.case3", screen: "Case3Menu" },
];
