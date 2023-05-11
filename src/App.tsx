import "./App.css";
import { PedalBoard, Header } from "./components";
import { LandingPage } from "./layouts";

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <LandingPage />
      <PedalBoard />
    </div>
  );
};
