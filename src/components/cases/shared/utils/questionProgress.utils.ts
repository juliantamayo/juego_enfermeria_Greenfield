import AsyncStorage from "@react-native-async-storage/async-storage";

const getQuestionProgressKey = (caseId: string, sceneId: string) => `${caseId}_${sceneId}_questions`;

const getSavedQuestionIds = async (caseId: string, sceneId: string) => {
  const data = await AsyncStorage.getItem(getQuestionProgressKey(caseId, sceneId));

  if (!data) {
    return [];
  }

  return JSON.parse(data) as string[];
};

const saveQuestionProgress = async (caseId: string, sceneId: string, questionId: string) => {
  const savedQuestionIds = await getSavedQuestionIds(caseId, sceneId);
  const updatedQuestionIds = Array.from(new Set([...savedQuestionIds, questionId]));

  await AsyncStorage.setItem(getQuestionProgressKey(caseId, sceneId), JSON.stringify(updatedQuestionIds));
};

export { getSavedQuestionIds, saveQuestionProgress };
