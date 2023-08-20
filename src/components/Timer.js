import { useEffect } from "react";

function Timer({ dispatch, secondsRemaning }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{secondsRemaning}</div>;
}

export default Timer;
