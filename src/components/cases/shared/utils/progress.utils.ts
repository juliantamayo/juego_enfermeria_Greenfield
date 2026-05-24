import AsyncStorage from "@react-native-async-storage/async-storage";

const getProgressKey = (caseId: string) => `${caseId}_progress`;
const getCompletedProgressKey = (caseId: string) => `${caseId}_completed_progress`;

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
  const completedScenes = await getCompletedScenes(caseId);
  const updatedCompletedScenes = Array.from(new Set([...completedScenes, completedSceneId]));

  await AsyncStorage.setItem(getProgressKey(caseId), JSON.stringify(unlockedScenes));
  await AsyncStorage.setItem(getCompletedProgressKey(caseId), JSON.stringify(updatedCompletedScenes));
};

const getCompletedScenes = async (caseId: string) => {
  const data = await AsyncStorage.getItem(getCompletedProgressKey(caseId));

  if (!data) {
    return [];
  }

  return JSON.parse(data) as string[];
};

export { getCompletedScenes, getSavedScenes, saveSceneProgress };
