import type { RootStackParamList } from "./types";

export const CASE_SCREENS: { name: string; label: string; screen: keyof RootStackParamList }[] = [
  { name: "Case1Menu", label: "case1", screen: "Case1Menu" },
  { name: "Case2Menu", label: "case2", screen: "Case2Menu" },
  { name: "Case3Menu", label: "case3", screen: "Case3Menu" },
];
