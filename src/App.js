
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import InsForm from "./InsForm";
import ListForm from "./ListForm";
import MyList from "./MyList";
import axios from "axios";
import TList from "./TList";


function App() {
  return (
    <>

      {/* <TList /> */}

      <Provider store={store}>
        <InsForm onSubmit={showResults} />
      </Provider>
    </>
  );
}
export default App;
