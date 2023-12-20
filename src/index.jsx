import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./Components/Counter";
import DestinationList from "./Components/DestinationList";
import Destination from "./Components/Destination";
import DestinationFact from "./Components/DestinationFact";
import ResetApp from "./Components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <div style={{ color: "#FFFFFF" }}>
        <Header></Header>
        <ResetApp></ResetApp>
        <Counter></Counter>
        <Destination>
            <DestinationList></DestinationList>
            <DestinationFact></DestinationFact>
        </Destination>
        <Footer></Footer>
      </div>
    </Provider>
  </div>
);
