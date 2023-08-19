import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
 const initialState={
  questions:[],
//'loading' ,'error','ready','active',''finished
  status:"loading"
 }

  function reducer(state,action){}

   const [state,dispatch]=useReducer(reducer,initialState)


  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error"));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>qusteion</p>
      </Main>
    </div>
  );
}
