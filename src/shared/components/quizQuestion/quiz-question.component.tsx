import type { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import type { QuizQuestionProps } from "@shared/types/quiz-question.type";
import { styles } from "./styles/quiz-question.styles";

const QuizQuestion: FC<QuizQuestionProps> = ({ question, instruction, answers, disabled, onAnswerPress }) => {
  return (
    <>
      <View style={styles.questionCard}>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.instruction}>{instruction}</Text>
      </View>

      <View style={styles.answers}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            key={answer.id}
            activeOpacity={0.7}
            disabled={disabled}
            onPress={() => onAnswerPress(answer)}
            style={styles.answer}
          >
            <View style={styles.answerBadge}>
              <Text style={styles.answerBadgeText}>{String.fromCharCode(65 + index)}</Text>
            </View>
            <Text style={styles.answerText}>{answer.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default QuizQuestion;
