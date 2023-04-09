import "./pedalBoard.css";
import {
  ReverbPedal,
  DelayPedal,
  VolumePedal,
  DistortionPedal,
  TunerPedal,
} from "../pedals";

export const PedalBoard = () => {
  return (
    <div className='pedal-board'>
      <div className='pedal-board-components'>
        <ReverbPedal />
        <DelayPedal />
        <DistortionPedal />
        <VolumePedal />
        <TunerPedal />
      </div>
    </div>
  );
};
