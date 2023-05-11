import "./pedalBoard.css";
import {
  ReverbPedal,
  DelayPedal,
  VolumePedal,
  DistortionPedal,
} from "../pedals";
import { Dropdown } from "../dropdown";

export const PedalBoard = () => {
  return (
    <div className="pedal-board">
      <Dropdown />
      <div className="pedal-board-components">
        <ReverbPedal />
        <DelayPedal />
        <DistortionPedal />
        <VolumePedal />
      </div>
    </div>
  );
};
