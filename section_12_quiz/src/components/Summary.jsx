import completeImg from "../assets/quiz-complete.png";
import questions from "../questions.js";
export default function Summary({ userAnswers }) {
      const skippedAnswers = userAnswers.filter(answer => answer === null).length;
      const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answers[0]).length;
      const wrongAnswers = userAnswers.filter((answer, index) => answer !== null && answer !== questions[index].answers[0]).length;

      const skippedPercentage = Math.round((skippedAnswers / userAnswers.length) * 100);
      const correctPercentage = Math.round((correctAnswers / userAnswers.length) * 100);
      const wrongPercentage = Math.round((wrongAnswers / userAnswers.length) * 100);

  return (
    <div id="summary">
      <img src={completeImg} alt="Completed" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">Wrong Answers</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
