import logo from "./logo.svg";
import "./App.css";
import Componet from "./Componets/Componet";
import State from "./Componets/State";
import { Provider } from "react-redux";
import store from './redux/store';


function App() {
  return (
    <div  className="App" >
      <div class="text-center my-5 max-w-md mt-10 space-y-0 ml-auto mr-auto mt-5">
        <br />
        <p class="text-bold font-medium text-center text-2xl mt-3 ">
          Simple Counter Application
        </p>
        <br />
        {/* couter section */}

        <Provider store={store}>
        <Componet></Componet>
       




        <Componet></Componet>
        </Provider>

        <State count={0}></State>
      </div>
    </div>
  );
}

export default App;
