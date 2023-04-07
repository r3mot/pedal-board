import { useDistorion } from "../../hooks";
import { Pedal } from "./Pedal";

export const DistortionPedal = () => {
  const { distortion } = useDistorion();

  return (
    <Pedal
      title='Distortion'
      knobs={[
        {
          min: 0,
          max: 100,
          initial: 0,
          change: distortion.setDistortion,
          name: "Dist",
        },
        {
          min: 0,
          max: 100,
          initial: 0,
          change: distortion.setMix,
          name: "Wet",
        },
      ]}
      activate={distortion.activate}
      bypass={distortion.bypass}
    />
  );
};
