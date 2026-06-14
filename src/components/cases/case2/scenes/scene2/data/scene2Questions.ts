type Case2Scene2Question = {
  id: string;
  titleKey: string;
  colorVariant: "primary" | "secondary";
  dialogId?: string;
};

const case2Scene2Questions: Case2Scene2Question[] = [
  {
    id: "question1",
    titleKey: "case2.scene2.questions.question1",
    colorVariant: "secondary",
    dialogId: "question1",
  },
  {
    id: "question2",
    titleKey: "case2.scene2.questions.question2",
    colorVariant: "primary",
    dialogId: "question2",
  },
  {
    id: "question3",
    titleKey: "case2.scene2.questions.question3",
    colorVariant: "secondary",
    dialogId: "question3",
  },
  {
    id: "question4",
    titleKey: "case2.scene2.questions.question4",
    colorVariant: "primary",
    dialogId: "question4",
  },
  {
    id: "question5",
    titleKey: "case2.scene2.questions.question5",
    colorVariant: "secondary",
    dialogId: "question5",
  },
];

export default case2Scene2Questions;
