export type Scene4Finding = {
  id: string;
  labelKey: string;
  correct: boolean;
};

const scene4Findings: Scene4Finding[] = [
  { id: "adequate-health-status", labelKey: "case2.scene4.findings.adequateHealthStatus", correct: true },
  { id: "active-independent", labelKey: "case2.scene4.findings.activeIndependent", correct: true },
  { id: "preserved-sensory-perception", labelKey: "case2.scene4.findings.preservedSensoryPerception", correct: true },
  { id: "time-place-disorientation", labelKey: "case2.scene4.findings.timePlaceDisorientation", correct: false },
  { id: "appropriate-emotional-responses", labelKey: "case2.scene4.findings.appropriateEmotionalResponses", correct: true },
  { id: "adequate-appearance-and-gait", labelKey: "case2.scene4.findings.adequateAppearanceAndGait", correct: true },
  { id: "pain-facies", labelKey: "case2.scene4.findings.painFacies", correct: false },
  { id: "conserved-memory", labelKey: "case2.scene4.findings.conservedMemory", correct: true },
  { id: "allopsychic-disorientation", labelKey: "case2.scene4.findings.allopsychicDisorientation", correct: false },
  { id: "conserved-judgment", labelKey: "case2.scene4.findings.conservedJudgment", correct: true },
  { id: "bradypsychia", labelKey: "case2.scene4.findings.bradypsychia", correct: false },
  { id: "sleep-pattern-without-alterations", labelKey: "case2.scene4.findings.sleepPatternWithoutAlterations", correct: true },
  { id: "odor-differentiation", labelKey: "case2.scene4.findings.odorDifferentiation", correct: true },
  { id: "odor-differentiation-inability", labelKey: "case2.scene4.findings.odorDifferentiationInability", correct: false },
  { id: "cotton-stimulus-responses", labelKey: "case2.scene4.findings.cottonStimulusResponses", correct: true },
  { id: "heat-cold-identification", labelKey: "case2.scene4.findings.heatColdIdentification", correct: true },
  { id: "facial-symmetry-jaw-contraction", labelKey: "case2.scene4.findings.facialSymmetryJawContraction", correct: true },
  { id: "expressive-aphasia-verbal-apraxia", labelKey: "case2.scene4.findings.expressiveAphasiaVerbalApraxia", correct: false },
  { id: "facial-asymmetry-jaw-contraction", labelKey: "case2.scene4.findings.facialAsymmetryJawContraction", correct: false },
  { id: "masseter-quick-contraction", labelKey: "case2.scene4.findings.masseterQuickContraction", correct: true },
  { id: "hemilingual-symmetry", labelKey: "case2.scene4.findings.hemilingualSymmetry", correct: true },
  { id: "deviated-tongue-tip", labelKey: "case2.scene4.findings.deviatedTongueTip", correct: false },
  { id: "centered-tongue-strength", labelKey: "case2.scene4.findings.centeredTongueStrength", correct: true },
  { id: "bone-conduction-predominates", labelKey: "case2.scene4.findings.boneConductionPredominates", correct: false },
  { id: "air-conduction-predominates", labelKey: "case2.scene4.findings.airConductionPredominates", correct: true },
  { id: "right-auditory-lateralization", labelKey: "case2.scene4.findings.rightAuditoryLateralization", correct: false },
  { id: "no-tuning-fork-lateralization", labelKey: "case2.scene4.findings.noTuningForkLateralization", correct: true },
  { id: "slight-shoulder-flexion", labelKey: "case2.scene4.findings.slightShoulderFlexion", correct: true },
  { id: "triceps-forearm-extension", labelKey: "case2.scene4.findings.tricepsForearmExtension", correct: true },
  { id: "knee-flexion", labelKey: "case2.scene4.findings.kneeFlexion", correct: true },
  { id: "plantar-flexion-foot", labelKey: "case2.scene4.findings.plantarFlexionFoot", correct: true },
  { id: "abdominal-wall-movement", labelKey: "case2.scene4.findings.abdominalWallMovement", correct: true },
  { id: "fan-like-toe-flexion", labelKey: "case2.scene4.findings.fanLikeToeFlexion", correct: true },
  { id: "two-point-discrimination", labelKey: "case2.scene4.findings.twoPointDiscrimination", correct: true },
  { id: "bilateral-astereognosis", labelKey: "case2.scene4.findings.bilateralAstereognosis", correct: false },
  { id: "bilateral-stereognosis", labelKey: "case2.scene4.findings.bilateralStereognosis", correct: true },
];

export default scene4Findings;
