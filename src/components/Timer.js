import { useEffect } from "react";
import { useQuiz } from "../context/QuizProviderContext";

function Timer() {
  const { dispatch, secondsRemaning } = useQuiz();
  const min = Math.floor(secondsRemaning / 60);
  const sec = secondsRemaning % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
