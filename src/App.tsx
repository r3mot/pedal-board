import "./App.css";
import { PedalBoard, Header, Intro } from "./components";

export const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Intro /> */}
      <PedalBoard />
    </div>
  );
};
