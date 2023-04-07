import "./pedalBoard.css";
import {
  ReverbPedal,
  DelayPedal,
  VolumePedal,
  DistortionPedal,
} from "../pedals";

export const PedalBoard = () => {
  return (
    <div className='pedal-board'>
      <div className='pedal-board-components'>
        <ReverbPedal />
        <DelayPedal />
        <DistortionPedal />
        <VolumePedal />
        {/* <div className='strip'></div> */}
      </div>
    </div>
  );
};
