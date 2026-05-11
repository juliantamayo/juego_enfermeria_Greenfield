type Case1Scene2Question = {
  id: string;
  titleKey: string;
  colorVariant: "primary" | "secondary";
  dialogId?: string;
  flowScreen?: "Scene2Question1FlowScreen" | "Scene2Question2FlowScreen" | "Scene2Question3FlowScreen";
};

const case1Scene2Questions: Case1Scene2Question[] = [
  {
    id: "question1",
    titleKey: "case1.scene2.questions.question1",
    colorVariant: "secondary",
    dialogId: "question1",
    flowScreen: "Scene2Question1FlowScreen",
  },
  {
    id: "question2",
    titleKey: "case1.scene2.questions.question2",
    colorVariant: "primary",
    dialogId: "question2",
    flowScreen: "Scene2Question2FlowScreen",
  },
  {
    id: "question3",
    titleKey: "case1.scene2.questions.question3",
    colorVariant: "secondary",
    dialogId: "question3",
    flowScreen: "Scene2Question3FlowScreen",
  },
  {
    id: "question4",
    titleKey: "case1.scene2.questions.question4",
    colorVariant: "primary",
  },
  {
    id: "question5",
    titleKey: "case1.scene2.questions.question5",
    colorVariant: "secondary",
  },
  {
    id: "question6",
    titleKey: "case1.scene2.questions.question6",
    colorVariant: "primary",
  },
  {
    id: "question7",
    titleKey: "case1.scene2.questions.question7",
    colorVariant: "secondary",
  },
];

export default case1Scene2Questions;
