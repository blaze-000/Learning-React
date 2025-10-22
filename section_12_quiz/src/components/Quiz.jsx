import { useCallback, useState } from "react";
import questions from "../questions.js";


import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionsIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionsIndex === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return (
     <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionsIndex}
        index={activeQuestionsIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
