import { useEffect } from "react";

function Timer({ dispatch, secondsRemaning }) {
    const min=Math.floor(secondsRemaning/60);
    const sec=secondsRemaning%60
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{min<10 &&'0'}{min}:{sec< 10&& '0' }{sec}</div>;
}

export default Timer;
