import "./pedalBoard.css";
import {
  ReverbPedal,
  DelayPedal,
  VolumePedal,
  DistortionPedal,
} from "../pedals";
import { Dropdown } from "../dropdown";
import { Record } from "../record";

export const PedalBoard = () => {
  return (
    <section className='pedal-board'>
      <div className='options'>
        <Dropdown />
      </div>
      <div className='pedal-board-components'>
        <ReverbPedal />
        <DelayPedal />
        <DistortionPedal />
        <VolumePedal />
      </div>
    </section>
  );
};
