import { useFreeverb } from "../../hooks";
import { Pedal } from "./Pedal";

export const ReverbPedal = () => {
  const { freeverb } = useFreeverb();

  return (
    <Pedal
      title='Reverb'
      knobs={[
        {
          min: 0,
          max: 100,
          initial: freeverb.mixAmount,
          change: freeverb.setMix,
          name: "Mix",
        },
        {
          min: 0,
          max: 100,
          initial: freeverb.roomSize,
          change: freeverb.setRoom,
          name: "Room",
        },
      ]}
      activate={freeverb.activate}
      bypass={freeverb.bypass}
    />
  );
};
