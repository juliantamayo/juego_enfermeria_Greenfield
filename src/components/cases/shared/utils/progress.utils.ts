import AsyncStorage from "@react-native-async-storage/async-storage";

const getProgressKey = (caseId: string) => `${caseId}_progress`;

const getSavedScenes = async (caseId: string) => {
  const data = await AsyncStorage.getItem(getProgressKey(caseId));

  if (!data) {
    return ["scene1"];
  }

  return JSON.parse(data) as string[];
};

const saveSceneProgress = async (caseId: string, completedSceneId: string, nextSceneId?: string) => {
  const savedScenes = await getSavedScenes(caseId);
  const scenesToUnlock = [completedSceneId, nextSceneId].filter(Boolean) as string[];
  const unlockedScenes = Array.from(new Set([...savedScenes, ...scenesToUnlock]));

  await AsyncStorage.setItem(getProgressKey(caseId), JSON.stringify(unlockedScenes));
};

export { getSavedScenes, saveSceneProgress };
