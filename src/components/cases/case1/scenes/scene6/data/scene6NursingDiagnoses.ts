export type NursingDiagnosisSectionKey = "definition" | "relatedTo" | "evidencedBy";

export type NursingDiagnosis = {
  id: string;
  code: string;
  diagnosisKey: string;
  sections: Record<NursingDiagnosisSectionKey, string>;
};

const scene6NursingDiagnoses: NursingDiagnosis[] = [
  {
    id: "powerlessness",
    code: "00125",
    diagnosisKey: "case1.scene6.diagnoses.powerlessness.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.powerlessness.definition",
      relatedTo: "case1.scene6.diagnoses.powerlessness.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.powerlessness.evidencedBy",
    },
  },
  {
    id: "anxiety",
    code: "00146",
    diagnosisKey: "case1.scene6.diagnoses.anxiety.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.anxiety.definition",
      relatedTo: "case1.scene6.diagnoses.anxiety.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.anxiety.evidencedBy",
    },
  },
  {
    id: "ineffectiveCoping",
    code: "00069",
    diagnosisKey: "case1.scene6.diagnoses.ineffectiveCoping.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.ineffectiveCoping.definition",
      relatedTo: "case1.scene6.diagnoses.ineffectiveCoping.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.ineffectiveCoping.evidencedBy",
    },
  },
  {
    id: "ineffectiveHealthManagement",
    code: "00078",
    diagnosisKey: "case1.scene6.diagnoses.ineffectiveHealthManagement.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.ineffectiveHealthManagement.definition",
      relatedTo: "case1.scene6.diagnoses.ineffectiveHealthManagement.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.ineffectiveHealthManagement.evidencedBy",
    },
  },
  {
    id: "impairedPhysicalMobility",
    code: "00085",
    diagnosisKey: "case1.scene6.diagnoses.impairedPhysicalMobility.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.impairedPhysicalMobility.definition",
      relatedTo: "case1.scene6.diagnoses.impairedPhysicalMobility.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.impairedPhysicalMobility.evidencedBy",
    },
  },
  {
    id: "impairedVerbalCommunication",
    code: "00051",
    diagnosisKey: "case1.scene6.diagnoses.impairedVerbalCommunication.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.impairedVerbalCommunication.definition",
      relatedTo: "case1.scene6.diagnoses.impairedVerbalCommunication.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.impairedVerbalCommunication.evidencedBy",
    },
  },
  {
    id: "feedingSelfCareDeficit",
    code: "00102",
    diagnosisKey: "case1.scene6.diagnoses.feedingSelfCareDeficit.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.feedingSelfCareDeficit.definition",
      relatedTo: "case1.scene6.diagnoses.feedingSelfCareDeficit.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.feedingSelfCareDeficit.evidencedBy",
    },
  },
  {
    id: "dressingSelfCareDeficit",
    code: "00109",
    diagnosisKey: "case1.scene6.diagnoses.dressingSelfCareDeficit.diagnosis",
    sections: {
      definition: "case1.scene6.diagnoses.dressingSelfCareDeficit.definition",
      relatedTo: "case1.scene6.diagnoses.dressingSelfCareDeficit.relatedTo",
      evidencedBy: "case1.scene6.diagnoses.dressingSelfCareDeficit.evidencedBy",
    },
  },
];

export default scene6NursingDiagnoses;
